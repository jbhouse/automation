"use strict";
var versionUpgradeObject = /** @class */ (function () {
    function versionUpgradeObject(projectName, branchName, dependency, updateConsumersVersion) {
        this.projectName = projectName;
        this.branchName = branchName;
        this.dependency = dependency;
        this.updateConsumersVersion = updateConsumersVersion;
    }
    return versionUpgradeObject;
}());
