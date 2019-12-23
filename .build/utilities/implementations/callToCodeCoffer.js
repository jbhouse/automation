"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../models/snippet");
const clipboardy = require('clipboardy');
const https = require('https');
let snippetDirectory = '.\\snippets\\';
module.exports = (fs, userConfig) => {
    return {
        openSnippet: (userInput) => openSnippetFromUrl(userInput, fs)
    };
};
function openSnippetFromUrl(userInput, fs) {
    // check for existing configuration
    let id = userInput.split("import/")[1];
    let url = "https://jayman-gameserver.herokuapp.com/conversations/" + id + "?startingIndex=0";
    // getSnippet(url, [saveFile(fs)]); //update save file to prompt the user to check if they want to overwrite the existing file, if the file is changed
    getSnippet(url, [saveContentToClipboard]);
}
function getSnippet(url, callbacks) {
    https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            let snip = snippet_1.Snippet.createValidSnippet(JSON.parse(data)[0].message.content);
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
        snippet.supplements.forEach(supplement => {
            let fileName = supplement.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join('') + '.' + supplement.language;
            fs.writeFileSync(snippetDirectory + fileName, supplement.code);
        });
    };
}
function saveContentToClipboard(snippet) {
    clipboardy.writeSync(snippet.supplements.map(supplement => supplement.code).join("\n"));
}
