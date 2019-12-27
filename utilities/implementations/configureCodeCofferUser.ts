module.exports = (fs: any, readline: any, userConfig: any) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const openFilesOnImport = () => {
        return new Promise((resolve, reject) => {
            rl.question("\nWould you like to open snippets when they are imported? (Y/N) \n" + "Currently " + userConfig.openFilesOnImport + ": ", (answer: string) => {
                updateUserConfig(answer, 'openFilesOnImport');
                resolve()
            })
        })
    }

    const copyToClipboard = () => {
        return new Promise((resolve, reject) => {
            rl.question("\nWould you like to have snippet contents save to your clipboard? (Y/N) \n" + "Currently " + userConfig.copyContentsToClipBoard + ": ", (answer: string) => {
                updateUserConfig(answer, 'copyContentsToClipBoard');
                resolve()
            })
        })
    }

    const assignDefaultEditorPath = () => {
        return new Promise((resolve, reject) => {
            rl.question("\nYour current editor for opening snippets is: " + userConfig.defaultEditor + "\n" + "define the path to the code editor we should open imported/existing snippets in: ", (answer: string) => {
                userConfig.defaultEditor = answer;
                resolve()
            })
        })
    }

    function updateUserConfig(answer: string, userPropertyToUpdate: any) {
        if (answer.toLocaleLowerCase() == 'y' || answer.toLocaleLowerCase() == 'yes') {
            userConfig[userPropertyToUpdate] = true;
        }
        if (answer.toLocaleLowerCase() == 'n' || answer.toLocaleLowerCase() == 'no') {
            userConfig[userPropertyToUpdate] = false;
        }
    }

    return {
        configureUser: async (userConfigFilePath: string) => {
            console.log("\nLeave the input empty for any of the following to keep your current setting");
            await openFilesOnImport();
            await copyToClipboard();
            await assignDefaultEditorPath();
            rl.close();
            userConfig.userIsConfigured = true;
            fs.writeFileSync(userConfigFilePath, JSON.stringify(userConfig, null, 2));
        }
    }
}

