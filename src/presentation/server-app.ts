import { SaveFile } from "../domain/use-cases/save-file.use-cases";
import { CreateTable } from "../domain/use-cases/create-table.use-case";


interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    fileName: string;
    destinationPath: string;
}

export class ServerApp {
    //   constructor(private readonly server: Server) {}

    static run({ base, limit, show, fileName, destinationPath }: RunOptions) {
        console.log('ServerApp is running');
        // this.server.start();
        console.log({ base, limit, show, fileName, destinationPath });
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({ content: table, fileName, destinationPath });

        if (show) {
            console.log(table);
        }

    }

    //   start() {
    //     this.server.start();
    //   }
}