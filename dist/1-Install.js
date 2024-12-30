"use strict";
//? first write in cmd ( npm install -g typescript) << One time execution >>
//? write in terminal tsc < to make sure that typescript is installed >
//? create a file has name index.ts
//* to run the program write in terminal
// 1-(tsc index.ts) //TODO>> typescript compiler (tsc) to convert your code to index.js
// 2-(node index.js) //TODO>> to run the javascript file
//* second way
// 1-(tsc --init) //TODO>> to create tsconfig.json
// 2-write in tsconfig.json {"target": "es2016", "module": "commonjs", "rootDir": "./src", "outDir": "./dist", "strict": true, "sourceMap": true}
// 2-write in tsconfig.json "lib": ["es6"] to allow some banned names like let name (here name is not allow to use)
// 2-write this commend in terminal `npm install @types/node --save-dev` to get to know console.log And so on
// 3-make src folder for your project
// 4-create a file has name index.ts in src folder
// 5-write in terminal
//1) tsc,
//2) nodemon dist/index
console.log("Hello from Typescript");
//# sourceMappingURL=1-Install.js.map