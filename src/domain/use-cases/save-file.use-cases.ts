import * as fs from 'fs';
import * as path from 'path';

console.log('Save File');

export interface SaveFileOptions {
    // filePath: string;
    fileName: string;
    destinationPath: string;
    content: string;
}

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => void;
}

export class SaveFile implements SaveFileUseCase {
    constructor() {
        console.log('SaveFile constructor is running');
    }

    execute({
        // filePath,
        destinationPath = 'outputs',
        fileName = 'table',
        content
    }: SaveFileOptions): boolean {
        try {
            fs.mkdirSync(destinationPath, { recursive: true });
            console.log(`${destinationPath}/${fileName}.txt`)
            fs.writeFileSync(`${destinationPath}/${fileName}.txt`, content);

            console.log('SaveFile done..');
            //            console.log({ filePath, destinationPath, content });
            return true;
        } catch (error) {
            console.log('Error saving file');
            return false;
        }
    }
}