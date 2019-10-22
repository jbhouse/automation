"use strict";
module.exports = (() => {
    const google = require('./google');
    const maven = require('./FilterCommandOutput');
    return {
        google: (executablePath, query) => google.searchGoogle(executablePath, "https://www.google.com/search?q=" + query.slice(4).join("+")),
        FilterOutput: (command, filterKeys) => maven.filterOutput(command, filterKeys)
    };
})();
