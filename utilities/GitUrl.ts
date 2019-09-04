var parse = require('parse-git-config');

module.exports = {
    gitUrl: () => {
        var gitUrl = parse.sync()['remote "origin"']['url'];
        return gitUrl.substring(0, gitUrl.length - 4);
    }
}