var git = require('simple-git');

module.exports = {
    gitCommit: (pathName: string, commitMessage: string) => {
        /*
        * The commit message is based on terminal input of indeterminate length collected into a string array
        * We need to create one coherent message by prepending each word with a space and adding it to the message itself
        */
        return git(pathName).raw(
            ['commit', '.', '-m', commitMessage],
            (err: string, result: string) => {
                if (Boolean(result)) {
                    console.log(result);
                }
                if (Boolean(err)) {
                    console.log(err);
                }
            });
    }
}