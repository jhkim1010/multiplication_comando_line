import { yarg as argvs } from "./config/plugins/yargs.plugin";
import * as fs from 'fs';
import { ServerApp } from "./presentation/server-app";
import * as path from 'path';

(async () => {
    await main();
    // console.log('done');
})();


async function main() {
    // console.log(argvs);
    const { b: base, l: limit, s: show, n: fileName, d: destinationPath } = argvs;

    ServerApp.run({ base, limit, show, fileName, destinationPath });

    // console.log('executing yargs plugin');
    // console.log(argvs);
    // multiplication(argvs.b, argvs.l);
}

