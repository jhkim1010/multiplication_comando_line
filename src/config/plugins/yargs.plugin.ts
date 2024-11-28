import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 2,
        describe: 'Base number to multiply'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show the multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'Name of the file'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    // .check((argv) => {
    // console.log('yargs check');
    // if (argv.b < 2 || argv.b > 10) { throw new Error('Base must be between 1 and 10') }
    // if (argv.l < 1 || argv.l > 10) { throw new Error('limit must be between 1 and 10') }
    // // if( argv.b< 1 || argv.b > 10) {            throw new Error('Base must be between 1 and 10        }
    // if( argv.b< 1 || argv.b > 10) {            throw new Error('Base must be between 1 and 10        }
    // console.log({ argv, options });
    // })
    .parseSync(); 