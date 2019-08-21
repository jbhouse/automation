let gitCommands = require('../utilities/git.js');
let commandToInvoke: string = process.argv[2];
let additionalArguments: string[] = [];

for (let i = 4; i < process.argv.length; i++) {
    additionalArguments.push(process.argv[i]);
}

let commandMap: any = {
    "gitUpdate": () => gitCommands.update(process.argv[3]),
    "gitPull": () => gitCommands.pull(process.argv[3], process.argv[4]),
    "gitCommit": () => gitCommands.commit(process.argv[3], additionalArguments),
    "goToGithub": () => gitCommands.goToGithub(process.argv[3])
}

commandMap[commandToInvoke]();