class VersionUpgradeObject {
    constructor(projectName: string, branchName: string, dependency: Dependency, updateConsumersVersion: string[]) {
        this.projectName = projectName;
        this.branchName = branchName;
        this.dependency = dependency;
        this.updateConsumersVersion = updateConsumersVersion;
    }
    projectName: string;
    branchName: string;
    dependency: Dependency;
    // check for any apps listed in here, and update to the given version
    updateConsumersVersion: string[];
}