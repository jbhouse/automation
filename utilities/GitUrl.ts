export const init = () => {
    let parse = require('parse-git-config');
    return {
        gitUrl: () => {
            var gitUrl = parse.sync()['remote "origin"']['url'];
            return gitUrl.substring(0, gitUrl.length - 4);
        }
    }
}