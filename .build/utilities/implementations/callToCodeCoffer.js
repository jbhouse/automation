"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../models/snippet");
const clipboardy = require('clipboardy');
const https = require('https');
let snippetBaseDirectory = '.\\snippets\\';
module.exports = (fs, userConfig) => {
    return {
        openSnippet: (userInput) => openSnippetFromUrl(userInput, fs)
    };
    function openFileInEditor(snippet) {
        const snippetDirectory = snippetBaseDirectory + snippet.title;
        snippet.supplements.forEach(supplement => {
            const fileName = supplement.name + '.' + supplement.language;
            const filePath = '"' + snippetDirectory + "\\" + fileName + '"';
            require('child_process').exec(userConfig.defaultEditor + " " + filePath);
        });
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
};
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
function saveFile(fs) {
    return (snippet) => {
        let snippetDirectory = snippetBaseDirectory + snippet.title;
        if (!fs.existsSync(snippetDirectory)) {
            fs.mkdirSync(snippetDirectory);
        }
        else {
            // ask user if they want to overwrite the existing snippet stored there
            console.log("this file exists, do we want to over write it?");
        }
        snippet.supplements.forEach(supplement => {
            let fileName = supplement.name + '.' + supplement.language;
            fs.writeFileSync(snippetDirectory + "\\" + fileName, supplement.code);
        });
    };
}
function saveContentToClipboard(snippet) {
    clipboardy.writeSync(snippet.supplements.map(supplement => supplement.code).join("\n"));
}
