"use strict";
module.exports = (fs) => {
    return ({
        "checkIfFileExists": checkIfFileExists,
        "changeDirectoryTo": changeDirectoryTo
    });
    function changeDirectoryTo(directoryPath) { return fs.readdirSync(directoryPath).map((project) => directoryPath + project); }
    function checkIfFileExists(absolutePathOfFile) { return fs.existsSync(absolutePathOfFile); }
};
