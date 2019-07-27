const git = require('simple-git');
const fs = require('fs');
const cdAndLs = require('./cdAndListDirectories');

const directoryPath = process.argv[2];
const filter = () => fs.lstatSync(directoryPath + file).isDirectory()

cdAndLs.cdAndListDirectories(directoryPath, filter)
    // we go to the given directory path and apply the given filter to retrieve the files/folder we want
    .then((directoryList) => {
        directoryList.forEach(project => {
            if (fs.existsSync(directoryPath + project + '\\.git')) {

                git(directoryPath + project).raw(
                    [
                        'pull',
                        'origin',
                        'develop'

                    ], (err, result) => {
                        if (Boolean(result)) {
                            console.log(directoryPath
                                + project + "---", result);
                        }
                        if (Boolean(err)) {
                            console.log(directoryPath + project + "---", err);
                        }
                    });
            }
        });

    })