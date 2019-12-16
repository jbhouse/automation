const util = require("util");
const { exec } = require("child_process");
const execProm = util.promisify(exec);

module.exports = {
    listBranches: async (cwd?: any) => {
        let branchList = await getBranchListString("git branch -a", { cwd: Boolean(cwd) ? cwd : process.cwd(), encoding: "utf8" });
        return branchList['stdout'].split('\n').map((branchName: string) => branchName.trim()).filter((trimmedBranch: string) => trimmedBranch !== '');
    }
}

async function getBranchListString(command: string, args?: any) {
    let result;
    try {
        result = Boolean(args) ? await execProm(command, args) : await execProm(command);
    } catch (ex) {
        result = ex;
    }
    if (Error[Symbol.hasInstance](result)) {
        return;
    }

    return result;
}