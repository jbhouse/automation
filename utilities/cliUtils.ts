export const init = () => {
    let g = require('./google').init();
    let maven = require('./FilterCommandOutput').init();
    return {
        google: (executablePath: string, query: string[]) => g.searchGoogle(executablePath, "https://www.google.com/search?q=" + query.slice(4).join("+"))
        , FilterOutput: (command: string, filterKeys: string) => maven.filterOutput(command, filterKeys)
    }
}