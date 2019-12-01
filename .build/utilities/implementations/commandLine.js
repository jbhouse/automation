"use strict";
module.exports = (fs) => {
    return ({
        "checkIfFileExists": checkIfFileExists,
        "changeDirectoryTo": changeDirectoryTo,
        "readFile": readFile
    });
    function changeDirectoryTo(directoryPath) { return fs.readdirSync(directoryPath).map((project) => directoryPath + project); }
    function checkIfFileExists(absolutePathOfFile) { return fs.existsSync(absolutePathOfFile); }
    function readFile(filePath) { return fs.readFileSync(filePath); }
};
