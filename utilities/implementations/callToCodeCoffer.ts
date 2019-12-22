import { Snippet } from "../models/snippet";
const clipboardy = require('clipboardy');

var fs = require('fs');
let snippetDirectory = 'C:\\snippets\\';

const https = require('https');

module.exports = {
    openSnippet: (userInput: string) => openSnippetFromUrl(userInput)
}

function openSnippetFromUrl(userInput: string) {
    let id = userInput.split("import/")[1];
    let url = generateUrl(id);
    getSnippet(url);
}

function generateUrl(id: string) {
    return "https://jayman-gameserver.herokuapp.com/conversations/" + id + "?startingIndex=0"
}

function getSnippet(url: string) {
    https.get(url, (resp: any) => {
        let data = '';

        resp.on('data', (chunk: any) => {
            data += chunk;
        });

        resp.on('end', () => {

            if (!fs.existsSync(snippetDirectory)) {
                fs.mkdirSync(snippetDirectory);
            }

            let snip: Snippet = Snippet.createValidSnippet(JSON.parse(data)[0].message.content);

            snip.supplements.forEach(supplement => {
                let fileName = supplement.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join('') + '.' + supplement.language;
                fs.writeFileSync(snippetDirectory + fileName, supplement.code);
            });
            clipboardy.writeSync(snip.supplements[0].code);
        });

    }).on("error", (err: any) => {
        console.log("Error: " + err.message);
    });
}