var baseUrl = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/"

let methodToGlobalObjectMap: any = {
    length: ['Array', 'String'],
    constructor: ['Date', 'String', 'Array'],
    anchor: ['String'],
    big: ['String'],
    blink: ['String'],
    bold: ['String'],
    charAt: ['String'],
    charCodeAt: ['String'],
    codePointAt: ['String'],
    concat: ['Array', 'String'],
    endsWith: ['String'],
    fontcolor: ['String'],
    fontsize: ['String'],
    fixed: ['String'],
    includes: ['Array', 'String'],
    indexOf: ['Array', 'String'],
    italics: ['String'],
    lastIndexOf: ['Array', 'String'],
    link: ['String'],
    localeCompare: ['String'],
    match: ['String'],
    matchAll: ['String'],
    normalize: ['String'],
    padEnd: ['String'],
    padStart: ['String'],
    repeat: ['String'],
    replace: ['String'],
    search: ['String'],
    slice: ['Array', 'String'],
    small: ['String'],
    split: ['String'],
    strike: ['String'],
    sub: ['String'],
    substr: ['String'],
    substring: ['String'],
    sup: ['String'],
    startsWith: ['String'],
    toString: ['Number', 'String', 'Array', 'Date'],
    trim: ['String'],
    trimStart: ['String'],
    trimLeft: ['String'],
    trimEnd: ['String'],
    trimRight: ['String'],
    toLocaleLowerCase: ['String'],
    toLocaleUpperCase: ['String'],
    toLowerCase: ['String'],
    toUpperCase: ['String'],
    valueOf: ['Number', 'String', 'Date'],
    copyWithin: ['Array'],
    fill: ['Array'],
    find: ['Array'],
    findIndex: ['Array'],
    pop: ['Array'],
    push: ['Array'],
    reverse: ['Array'],
    shift: ['Array'],
    unshift: ['Array'],
    sort: ['Array'],
    splice: ['Array'],
    join: ['Array'],
    keys: ['Map'],
    entries: ['Map'],
    values: ['Map'],
    forEach: ['Map'],
    filter: ['Array'],
    flat: ['Array'],
    flatMap: ['Array'],
    map: ['Array'],
    every: ['Array'],
    some: ['Array'],
    reduce: ['Array'],
    reduceRight: ['Array'],
    toLocaleString: ['Number', 'Array', 'Date'],
    toDateString: ['Date'],
    toTimeString: ['Date'],
    toISOString: ['Date'],
    toUTCString: ['Date'],
    toGMTString: ['Date'],
    getDate: ['Date'],
    setDate: ['Date'],
    getDay: ['Date'],
    getFullYear: ['Date'],
    setFullYear: ['Date'],
    getHours: ['Date'],
    setHours: ['Date'],
    getMilliseconds: ['Date'],
    setMilliseconds: ['Date'],
    getMinutes: ['Date'],
    setMinutes: ['Date'],
    getMonth: ['Date'],
    setMonth: ['Date'],
    getSeconds: ['Date'],
    setSeconds: ['Date'],
    getTime: ['Date'],
    setTime: ['Date'],
    getTimezoneOffset: ['Date'],
    getUTCDate: ['Date'],
    setUTCDate: ['Date'],
    getUTCDay: ['Date'],
    getUTCFullYear: ['Date'],
    setUTCFullYear: ['Date'],
    getUTCHours: ['Date'],
    setUTCHours: ['Date'],
    getUTCMilliseconds: ['Date'],
    setUTCMilliseconds: ['Date'],
    getUTCMinutes: ['Date'],
    setUTCMinutes: ['Date'],
    getUTCMonth: ['Date'],
    setUTCMonth: ['Date'],
    getUTCSeconds: ['Date'],
    setUTCSeconds: ['Date'],
    getYear: ['Date'],
    setYear: ['Date'],
    toJSON: ['Date'],
    toLocaleDateString: ['Date'],
    toLocaleTimeString: ['Date'],
    clear: ['Map'],
    delete: ['Map'],
    get: ['Map'],
    has: ['Map'],
    set: ['Map'],
    isFinite: ['Number'],
    isInteger: ['Number'],
    isNaN: ['Number'],
    isSafeInteger: ['Number'],
    parseFloat: ['Number'],
    parseInt: ['Number'],
    toExponential: ['Number'],
    toFixed: ['Number'],
    toPrecision: ['Number'],
    toSource: ['Number'],
    all: ['Promise'],
    allSettled: ['Promise'],
    any: ['Promise'],
    catch: ['Promise'],
    finally: ['Promise'],
    then: ['Promise'],
    race: ['Promise'],
    reject: ['Promise'],
    resolve: ['Promise']
}

module.exports = {
    getJavascriptUrl: (openInBrowserFunction: any, browserExecutablePath: string, userInput: string, readline: any) => urlConstructor(openInBrowserFunction, browserExecutablePath, userInput, readline)
}

function urlConstructor(openInBrowserFunction: any, browserExecutablePath: string, userInput: string, readline: any) {

    let globalObjectList: string[] = methodToGlobalObjectMap[userInput];
    if (globalObjectList === undefined) {
        openInBrowserFunction(browserExecutablePath, "https://www.google.com/search?q=" + "mdn " + userInput)
    } else if (globalObjectList.length > 1) {
        console.log(userInput + ' is a function on the prototype of several objects, please pick the one you want to look up');
        for (let i = 0; i < globalObjectList.length; i++) {
            console.log(i + " for " + globalObjectList[i]);
        }
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter your choice here: ', (answer: string) => {
            openInBrowserFunction(browserExecutablePath, baseUrl + globalObjectList[Number(answer)] + "/" + userInput)
            rl.close();
        });
    } else {
        openInBrowserFunction(browserExecutablePath, baseUrl + globalObjectList[0] + "/" + userInput)
    }
}