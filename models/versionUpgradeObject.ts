interface VersionUpgradeObject {
    projectName: string;
    branchName: string;
    xmlTag: Tag;
    // check for any apps listed in here, and update to the given version
    updateConsumersVersion: string[];
}