import { Snippet } from "../models/snippet";
const clipboardy = require('clipboardy');
const https = require('https');
let snippetBaseDirectory = '.\\snippets\\';
let projectBaseDirectory = __dirname.split(".build")[0];

module.exports = (fs: any, readline: any, userConfig: any) => {

    return {
        openSnippet: (userInput: string) => openSnippetFromUrl(userInput, fs)
    }

    function openFileInEditor(snippet: Snippet) {
        let filePaths = transformSupplementNamesToFilePaths(snippet).join(" ");
        require('child_process').exec(userConfig.defaultEditor + " " + filePaths);
    }

    function transformSupplementNamesToFilePaths(snippet: Snippet) {
        const snippetDirectory = projectBaseDirectory + snippetBaseDirectory + snippet.title;
        return snippet.supplements
            .map(supplement => supplement.name + '.' + supplement.language)
            .map(fileName => '"' + snippetDirectory + "\\" + fileName + '"');
    }

    function saveFile(fs: any) {
        return (snippet: Snippet) => {
            let snippetDirectory = projectBaseDirectory + snippetBaseDirectory + snippet.title;

            if (!fs.existsSync(snippetDirectory)) {
                fs.mkdirSync(snippetDirectory);

                snippet.supplements.forEach(supplement => {
                    let fileName = supplement.name + '.' + supplement.language;
                    fs.writeFileSync(snippetDirectory + "\\" + fileName, supplement.code);
                });
            } else {
                fs.readdirSync(snippetDirectory).forEach((file: any) => {
                    fs.readFile(snippetDirectory + "\\" + file, 'utf8', function (err: string, contents: string) {
                        let incomingSnippetContents = snippet.supplements.filter(supplement => supplement.name + '.' + supplement.language === file)[0].code;

                        if (contents != incomingSnippetContents) {
                            const rl = readline.createInterface({
                                input: process.stdin,
                                output: process.stdout
                            });
                            rl.question("'" + file + "' already exists and differs from snippet being imported. Replace the existing snippet? (Y/N): ", (answer: string) => {
                                if (answer.toLocaleLowerCase() == 'y' || answer.toLocaleLowerCase() == 'yes') {
                                    fs.writeFileSync(snippetDirectory + "\\" + file, incomingSnippetContents);
                                }
                                rl.close();
                            })

                        }
                    });
                });
            }
        }
    }

    function saveContentToClipboard(snippet: Snippet) {
        clipboardy.writeSync(snippet.supplements.map(supplement => supplement.code).join("\n"));
    }

    function openSnippetFromUrl(userInput: string, fs: any) {
        const id = userInput.split("import/")[1];
        const url = "https://jayman-gameserver.herokuapp.com/conversations/" + id + "?startingIndex=0";
        let callbacks = [saveFile(fs)];

        if (userConfig.openFilesOnImport) {
            callbacks.push(openFileInEditor);
        }
        if (userConfig.copyContentsToClipBoard) {
            callbacks.push(saveContentToClipboard);
        }
        getSnippet(url, callbacks);
    }

    function getSnippet(url: string, callbacks: any[]) {
        https.get(url, (resp: any) => {
            let data = '';

            resp.on('data', (chunk: any) => {
                data += chunk;
            });

            resp.on('end', () => {
                const snip: Snippet = Snippet.createValidSnippet(JSON.parse(data)[0].message.content);
                callbacks.forEach(callback => {
                    callback(snip);
                });
            });

        }).on("error", (err: any) => {
            console.log("Error: " + err.message);
        });
    }
} 