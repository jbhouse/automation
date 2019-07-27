module.exports = {
    cdAndListDirectories: async (directoryPath, filter) => {
        const fs = require('fs');
        return await fs.readdirSync(directoryPath, (err, files) => {
            return files.filter(filter);
        })
    }
}