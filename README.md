# textlint-rule-no-hoso-kinshi-yogo-mod

Tentative source to download the dictionary file from a different URL, since running it on CI would probably result in a 504 BadGateway due to blocked access from the same IP.

housouKinshiYougo.xml
Tentative source to download the dictionary file from a different URL, since running it on CI would probably result in a 504 BadGateway due to blocked access from the same IP.

The rights to housouKinshiYougo.xml belong to http://monoroch.net/

## How to use

Add your package.json

```
"textlint-rule-no-hoso-kinshi-yogo": "github:tubone24/textlint-rule-no-hoso-kinshi-yogo",
```

## Error

```
Run npx textlint -f checkstyle "src/content/*.md" >> .textlint.log
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Error: 502: Bad Gateway
    at /home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:35:15
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:18:103)
    at _next (/home/runner/work/blog/blog/node_modules/textlint-rule-no-hoso-kinshi-yogo/lib/index.js:20:194)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
```
