export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() {
        console.log('CreateTable constructor is running');
    }

    execute({ base, limit = 10 }: CreateTableOptions): string {
        let outputMessage = '';
        for (let i = 2; i < limit; i++) {
            outputMessage += `${base} * ${i} = ${base * i} \n`;
        }
        return outputMessage;
        // console.log('CreateTable is running');
    }
}