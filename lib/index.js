"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("isomorphic-fetch");

var _fastXmlParser = _interopRequireDefault(require("fast-xml-parser"));

var _kuromojin = require("kuromojin");

var _os = _interopRequireDefault(require("os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fs = require('fs');

// const dictionaryUrl = 'https://www.dropbox.com/s/qy7qd44k1bfbsl1/housouKinshiYougo.xml?dl=0';
var referenceUrl = 'http://monoroch.net/kinshi/';
var dictionaryPath = "".concat(process.env["RUNNER_TMP"] || _os.default.tmpdir(), "/housouKinshiYougo.xml");
var maxAge = 604800;

// const fetchAndCacheDictionary = async () => {
//   try {
//     const response = await fetch(dictionaryUrl);
//     if (response.status >= 400) {
//       throw new Error(`${response.status}: ${response.statusText}`);
//     }
//     const text = await response.text();
//     fs.writeFileSync(dictionaryPath, text);
//     return text;
//   } catch (e) {
//     console.error(e);
//     return;
//   }
// }
var readDictionaryFromCache = (_ref) => {
  var {
    ignoreMaxAge = false
  } = _ref;

  try {
    var stats = fs.statSync(dictionaryPath);

    if (ignoreMaxAge || new Date().getTime() - stats.mtime.getTime() < maxAge * 1000) {
      return fs.readFileSync(dictionaryPath).toString();
    }
  } catch (_unused) {}

  return;
};

var getDictionary = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* () {
    var text = readDictionaryFromCache({}) || readDictionaryFromCache({
      ignoreMaxAge: true
    });

    if (!text) {
      throw new Error('辞書データを取得できませんでした。');
    }

    var dictionary = _fastXmlParser.default.parse(text, {
      ignoreAttributes: false
    });

    return dictionary;
  });

  return function getDictionary() {
    return _ref2.apply(this, arguments);
  };
}();

var reporter = context => {
  var {
    fixer,
    getSource,
    report,
    RuleError,
    Syntax
  } = context;
  return {
    [Syntax.Str](node) {
      return _asyncToGenerator(function* () {
        var text = getSource(node);
        var tokens = yield (0, _kuromojin.tokenize)(text);
        var {
          housouKinshiYougoList
        } = yield getDictionary();
        tokens.forEach((_ref3) => {
          var _housouKinshiYougoLis;

          var {
            surface_form,
            word_position
          } = _ref3;
          housouKinshiYougoList === null || housouKinshiYougoList === void 0 ? void 0 : (_housouKinshiYougoLis = housouKinshiYougoList.dirtyWord) === null || _housouKinshiYougoLis === void 0 ? void 0 : _housouKinshiYougoLis.forEach((_ref4) => {
            var {
              notes,
              replaceWordList,
              word
            } = _ref4;

            if (surface_form !== (word === null || word === void 0 ? void 0 : word["#text"])) {
              return;
            }

            var index = word_position - 1;
            var replaceWordArray = (replaceWordList === null || replaceWordList === void 0 ? void 0 : replaceWordList.word) instanceof Array ? replaceWordList.word : (replaceWordList === null || replaceWordList === void 0 ? void 0 : replaceWordList.word) && [replaceWordList.word];
            var ruleError = new RuleError(["\u653E\u9001\u7981\u6B62\u7528\u8A9E\u300C".concat(word["#text"], "\u300D\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"), ...(replaceWordArray && ["\u8A00\u3044\u63DB\u3048\u8A9E: ".concat(replaceWordArray.map(word => word["#text"]).join(', '))] || []), ...(notes && ["\u5099\u8003: ".concat(notes)] || []), "\u53C2\u7167: ".concat(referenceUrl)].join('　'), {
              index,
              fix: (replaceWordArray === null || replaceWordArray === void 0 ? void 0 : replaceWordArray.length) === 1 && replaceWordArray[0]["#text"] && fixer.replaceTextRange([index, index + word["#text"].length], replaceWordArray[0]["#text"]) || undefined
            });
            report(node, ruleError);
          });
        });
      })();
    }

  };
};

var _module = {
  fixer: reporter,
  linter: reporter
};
var _default = _module;
exports.default = _default;
//# sourceMappingURL=index.js.map