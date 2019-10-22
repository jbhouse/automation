export const init = (fs: any) => {
    const file = require('../../taskCounter.json');
    return {
        update: (directoryToUpdate: string, fn: any) => {
            if (new Date().toString().slice(0, 9) != file.updateLastRun) {
                fn(directoryToUpdate);
                file.updateLastRun = new Date().toString().slice(0, 9);
                fs.writeFileSync('./taskCounter.json', JSON.stringify(file, null, 2));
            }
        }
    }
}