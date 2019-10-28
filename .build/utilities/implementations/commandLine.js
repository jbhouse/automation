"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = (fs) => ({
    changeDirectoryTo: (directoryPath) => fs.readdirSync(directoryPath).map((project) => directoryPath + project),
    checkIfFileExists: (absolutePathOfFile) => fs.existsSync(absolutePathOfFile)
});
