export const init = (git: any) => {
    return {
        gitPull: (workingDirectory: string, givenBranchName: string) =>
            git(workingDirectory).raw(
                ['pull', 'origin', (Boolean(givenBranchName) ? givenBranchName : "develop")],
                (err: string, result: string) => Boolean(result) ? console.log(result) : console.log(err)
            )
    }
}