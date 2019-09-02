var gitCommands = require('../utilities/git');
var dailyUpdate = require('../utilities/taskIncrementor');
var cliUtils = require('../utilities/cliUtils')
let commandToInvoke: string = process.argv[2];

let commandMap: any = {
    "gitUpdate": () => gitCommands.update(process.argv[3])
    , "gitPull": () => gitCommands.pull(process.argv[3], process.argv[4])
    , "gitCommit": () => gitCommands.commit(process.argv[3], process.argv.slice(4).join(" "))
    , "goToGithub": () => gitCommands.GitUrl(process.argv[3])
    , "openPR": () => gitCommands.openPR(process.argv[3])
    , "parseBranch": () => gitCommands.parseBranch(process.argv[3])
    , "commitBranchName": () => gitCommands.parseBranch(process.argv[3])
        .then((branchName: string) =>
            gitCommands.commit(process.argv[3], branchName + ": " + process.argv.slice(4).join(" ")))
    , "dailyUpdate": () => dailyUpdate.dailyUpdate(process.argv[3], gitCommands.update)
    , "google": () => cliUtils.google(process.argv[3], process.argv)
}

commandMap[commandToInvoke]();