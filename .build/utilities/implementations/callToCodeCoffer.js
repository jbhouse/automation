"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../models/snippet");
const clipboardy = require('clipboardy');
var fs = require('fs');
let snippetDirectory = 'C:\\snippets\\';
const https = require('https');
module.exports = {
    openSnippet: (userInput) => openSnippetFromUrl(userInput)
};
function openSnippetFromUrl(userInput) {
    let id = userInput.split("import/")[1];
    let url = generateUrl(id);
    getSnippet(url);
}
function generateUrl(id) {
    return "https://jayman-gameserver.herokuapp.com/conversations/" + id + "?startingIndex=0";
}
function getSnippet(url) {
    https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            if (!fs.existsSync(snippetDirectory)) {
                fs.mkdirSync(snippetDirectory);
            }
            let snip = snippet_1.Snippet.createValidSnippet(JSON.parse(data)[0].message.content);
            snip.supplements.forEach(supplement => {
                let fileName = supplement.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join('') + '.' + supplement.language;
                fs.writeFileSync(snippetDirectory + fileName, supplement.code);
            });
            clipboardy.writeSync(snip.supplements[0].code);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
