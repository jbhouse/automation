module.exports = {
    /**
     * 
     * cds to the given directory and lists out everything there that passes the filter
     * 
     */
    cdAndList: async (directoryPath, filter) => {
        const fs = require('fs');
        return await fs.readdirSync(directoryPath, (err, files) => {
            return files.filter(filter);
        })
    }
}