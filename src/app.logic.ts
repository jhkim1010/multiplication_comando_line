import * as fs from 'fs';
import * as path from 'path';
import { yarg } from './config/plugins/yargs.plugin';

console.log(yarg);
const { b: base, l: limit, s: show } = yarg;

// const { b, l, s } = yarg;

// const multiplication = (num: number) => {
let outputMessage = '';
// const num = yarg.b;
// const limit = yarg.l;
const header_msg =
    `
    ==========================
    Multiplication table of ${base}
    ==========================
    `;

outputMessage += header_msg;

for (let i = 2; i < limit; i++) {
    outputMessage += `${base} * ${i} = ${base * i} \n    `;
}

const filePath = path.join(__dirname, `../outputs/table-${base}.txt`);
// console.log(filePath);
// const outputMessage = multiplication(num);
if (show) {
    console.log(outputMessage);
}

fs.mkdirSync(path.join(__dirname, '../outputs'), { recursive: true });
fs.writeFileSync(filePath, outputMessage);
console.log(`File generated at ${filePath}`);
