import { Snippet } from "../models/snippet";
const clipboardy = require('clipboardy');
const https = require('https');
let snippetDirectory = '.\\snippets\\';

module.exports = (fs: any, userConfig: any) => {
    return {
        openSnippet: (userInput: string) => openSnippetFromUrl(userInput, fs)
    }
}

function openSnippetFromUrl(userInput: string, fs: any) {
    // check for existing configuration
    let id = userInput.split("import/")[1];
    let url = "https://jayman-gameserver.herokuapp.com/conversations/" + id + "?startingIndex=0";
    // getSnippet(url, [saveFile(fs)]); //update save file to prompt the user to check if they want to overwrite the existing file, if the file is changed
    getSnippet(url, [saveContentToClipboard]);

}

function getSnippet(url: string, callbacks: any[]) {
    https.get(url, (resp: any) => {
        let data = '';

        resp.on('data', (chunk: any) => {
            data += chunk;
        });

        resp.on('end', () => {
            let snip: Snippet = Snippet.createValidSnippet(JSON.parse(data)[0].message.content);
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
        snippet.supplements.forEach(supplement => {
            let fileName = supplement.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join('') + '.' + supplement.language;
            fs.writeFileSync(snippetDirectory + fileName, supplement.code);
        });
    }
}

function saveContentToClipboard(snippet: Snippet) {
    clipboardy.writeSync(snippet.supplements.map(supplement => supplement.code).join("\n"));
}
