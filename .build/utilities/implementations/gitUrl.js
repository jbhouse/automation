"use strict";
module.exports = (cmd) => {
    return ({ "gitUrl": gitUrl });
    function gitUrl() {
        let gitConfigContents = cmd.readFile(process.cwd() + '\\.git\\config').toString().split("\n");
        const gitUrl = gitConfigContents[(gitConfigContents.indexOf('[remote "origin"]') + 1)].trim().split("= ")[1];
        return gitUrl.substring(0, gitUrl.length - 4);
    }
};
