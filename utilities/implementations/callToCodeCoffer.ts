import { Snippet } from "../models/snippet";
const clipboardy = require('clipboardy');
const https = require('https');
let snippetBaseDirectory = '.\\snippets\\';

module.exports = (fs: any, userConfig: any) => {

    return {
        openSnippet: (userInput: string) => openSnippetFromUrl(userInput, fs)
    }

    function openFileInEditor(snippet: Snippet) {
        const snippetDirectory = snippetBaseDirectory + snippet.title;
        snippet.supplements.forEach(supplement => {
            const fileName = supplement.name + '.' + supplement.language;
            const filePath = '"' + snippetDirectory + "\\" + fileName + '"'
            require('child_process').exec(userConfig.defaultEditor + " " + filePath);
        });
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
        getSnippet(url, callbacks); //update save file to prompt the user to check if they want to overwrite the existing file, if the file is changed
    }
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

function saveFile(fs: any) {
    return (snippet: Snippet) => {
        let snippetDirectory = snippetBaseDirectory + snippet.title;
        if (!fs.existsSync(snippetDirectory)) {
            fs.mkdirSync(snippetDirectory);
        } else {
            // ask user if they want to overwrite the existing snippet stored there
            console.log("this snppet exists, do we want to over write it?");
        }

        snippet.supplements.forEach(supplement => {
            let fileName = supplement.name + '.' + supplement.language;
            fs.writeFileSync(snippetDirectory + "\\" + fileName, supplement.code);
        });
    }
}

function saveContentToClipboard(snippet: Snippet) {
    clipboardy.writeSync(snippet.supplements.map(supplement => supplement.code).join("\n"));
}
