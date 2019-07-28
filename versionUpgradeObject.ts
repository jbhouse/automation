class versionUpgradeObject {
    constructor(projectName: string, branchName: string, version: number, updateConsumersVersion: string[]) {
        this.projectName = projectName;
        this.branchName = branchName;
        this.version = version;
        this.updateConsumersVersion = updateConsumersVersion;
    }
    projectName: string;
    branchName: string;
    version: number;
    // check for any apps listed in here, and update to the given version
    updateConsumersVersion: string[];
}