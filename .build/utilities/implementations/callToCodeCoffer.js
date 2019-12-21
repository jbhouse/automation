"use strict";
const https = require('https');
module.exports = {
    openSnippet: (userInput) => openSnippetFromUrl(userInput)
};
function openSnippetFromUrl(userInput) {
    let id = userInput.split("import/")[1];
    // let id = "V7NWC3Z5MHQ6FR4D";
    let url = generateUrl(id);
    getSnippet(url);
}
function generateUrl(id) {
    return "https://jayman-gameserver.herokuapp.com/conversations/" + id + "?startingIndex=0";
}
function getSnippet(url) {
    https.get(url, (resp) => {
        let data = '';
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data));
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
