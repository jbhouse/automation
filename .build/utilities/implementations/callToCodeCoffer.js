"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../models/snippet");
const clipboardy = require('clipboardy');
const https = require('https');
let snippetBaseDirectory = '.\\snippets\\';
let projectBaseDirectory = __dirname.split(".build")[0];
module.exports = (fs, readline, userConfig) => {
    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // });
    return {
        openSnippet: (userInput) => openSnippetFromUrl(userInput, fs)
    };
    function openFileInEditor(snippet) {
        let filePaths = transformSupplementNamesToFilePaths(snippet).join(" ");
        // require('child_process').exec(userConfig.defaultEditor + " " + filePaths);
    }
    function transformSupplementNamesToFilePaths(snippet) {
        const snippetDirectory = projectBaseDirectory + snippetBaseDirectory + snippet.title;
        return snippet.supplements
            .map(supplement => supplement.name + '.' + supplement.language)
            .map(fileName => '"' + snippetDirectory + "\\" + fileName + '"');
    }
    function saveFile(fs) {
        return (snippet) => {
            let snippetDirectory = projectBaseDirectory + snippetBaseDirectory + snippet.title;
            if (!fs.existsSync(snippetDirectory)) {
                fs.mkdirSync(snippetDirectory);
                snippet.supplements.forEach(supplement => {
                    let fileName = supplement.name + '.' + supplement.language;
                    fs.writeFileSync(snippetDirectory + "\\" + fileName, supplement.code);
                });
            }
            else {
                fs.readdirSync(snippetDirectory).forEach((file) => {
                    fs.readFile(snippetDirectory + "\\" + file, 'utf8', function (err, contents) {
                        let incomingSnippetContents = snippet.supplements.filter(supplement => supplement.name + '.' + supplement.language === file)[0].code;
                        if (contents != incomingSnippetContents) {
                            const rl = readline.createInterface({
                                input: process.stdin,
                                output: process.stdout
                            });
                            rl.question("'" + file + "' already exists and differs from snippet being imported. Replace the existing snippet? (Y/N): ", (answer) => {
                                if (answer.toLocaleLowerCase() == 'y' || answer.toLocaleLowerCase() == 'yes') {
                                    fs.writeFileSync(snippetDirectory + "\\" + file, incomingSnippetContents);
                                }
                                rl.close();
                            });
                        }
                    });
                });
            }
        };
    }
    function saveContentToClipboard(snippet) {
        clipboardy.writeSync(snippet.supplements.map(supplement => supplement.code).join("\n"));
    }
    function openSnippetFromUrl(userInput, fs) {
        const id = userInput.split("import/")[1];
        const url = "https://jayman-gameserver.herokuapp.com/conversations/" + id + "?startingIndex=0";
        let callbacks = [saveFile(fs)];
        if (userConfig.openFilesOnImport) {
            callbacks.push(openFileInEditor);
        }
        if (userConfig.copyContentsToClipBoard) {
            callbacks.push(saveContentToClipboard);
        }
        getSnippet(url, callbacks); //update save file to prompt the user to check if they want to overwrite the existing file, if the file is changed
    }
    function getSnippet(url, callbacks) {
        https.get(url, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                const snip = snippet_1.Snippet.createValidSnippet(JSON.parse(data)[0].message.content);
                callbacks.forEach(callback => {
                    callback(snip);
                });
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
    // const askToReplaceSnippet = () => {
    //     return new Promise((resolve, reject) => {
    //         rl.question("This snippet is already saved, but is different from the snippet you are importing. Would you like to update your existing snippet?", (answer: string) => {
    //             resolve();
    //         })
    //     })
    // }
    // const askToCopyToClipboard = () => {
    //     return new Promise((resolve, reject) => {
    //         rl.question("Would you like to copy this snippet to your clipboard?", (answer: string) => {
    //             resolve();
    //         })
    //     })
    // }
};
