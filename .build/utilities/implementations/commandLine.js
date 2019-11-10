"use strict";
module.exports = (fs) => {
    return ({
        "checkIfFileExists": checkIfFileExists,
        "changeDirectoryTo": changeDirectoryTo
    });
    function changeDirectoryTo(directoryPath) { fs.readdirSync(directoryPath).map((project) => directoryPath + project); }
    function checkIfFileExists(absolutePathOfFile) { fs.existsSync(absolutePathOfFile); }
};
