const fs = require('fs');
const gitCommands = require('../utilities/git');
const dailyUpdate = require('../utilities/implementations/taskIncrementor');
const cliUtils = require('../utilities/cliUtils');
const commandToInvoke: string = process.argv[2];

const commandMap: any = {
        "gitUpdate": () => gitCommands(fs).update(process.argv[3])
        , "gitCheckout": () => gitCommands(fs).checkout(process.argv[3], process.argv[4])
        , "popStashByName": () => gitCommands(fs).popStashByName(process.argv[3], process.argv.slice(4).join(" "))
        , "gitPull": () => gitCommands(fs).pull(process.argv[3], process.argv[4])
        , "gitCommit": () => gitCommands(fs).commit(process.argv[3], process.argv.slice(4).join(" "))
        , "goToGithub": () => gitCommands(fs).GitUrl(process.argv[3])
        , "openPR": () => gitCommands(fs).openPR(process.argv[3])
        , "parseBranch": () => gitCommands(fs).parseBranch(process.argv[3])
        , "commitBranchName": () => gitCommands(fs).parseBranch(process.argv[3])
                .then((branchName: string) =>
                        gitCommands(fs).commit(process.argv[3], branchName + ": " + process.argv.slice(4).join(" ")))
        , "dailyUpdate": () => dailyUpdate(fs).update(process.argv[3], gitCommands(fs).update)
        , "google": () => cliUtils.google(process.argv[3], process.argv)
        , "FilterMavenCommand": () => cliUtils.FilterOutput(process.argv[3], " | grep --line-buffered "
                + process.argv.slice(4).join(" | grep --line-buffered "))
}

commandMap[commandToInvoke]();