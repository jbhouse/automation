export const init = () => {
    const branch = require('git-branch');
    return {
        parseGitBranch: (pathName: string) => {
            return branch(pathName)
                .then((name: string) => {
                    return name;
                }) //=> 'master'
                .catch(console.error);
        }
    }
}