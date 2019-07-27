const git = require('simple-git');
const fs = require('fs');
const cdAndLs = require('./cdAndListDirectories');

const directoryPath = process.argv[2];
const directoryFilter = () => fs.lstatSync(directoryPath + file).isDirectory();

cdAndLs.cdAndList(directoryPath, directoryFilter).then((directoryList) =>
    // filter out everything that isn't a git project
    directoryList.filter(project => fs.existsSync(directoryPath + project + '\\.git'))
        .forEach(element => {
            git(directoryPath + element).raw(
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
        })
)
