"use strict";
var versionUpgradeObject = /** @class */ (function () {
    function versionUpgradeObject(projectName, branchName, version, updateConsumersVersion) {
        this.projectName = projectName;
        this.branchName = branchName;
        this.version = version;
        this.updateConsumersVersion = updateConsumersVersion;
    }
    return versionUpgradeObject;
}());
