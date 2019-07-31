"use strict";
var VersionUpgradeObject = /** @class */ (function () {
    function VersionUpgradeObject(projectName, branchName, dependency, updateConsumersVersion) {
        this.projectName = projectName;
        this.branchName = branchName;
        this.dependency = dependency;
        this.updateConsumersVersion = updateConsumersVersion;
    }
    return VersionUpgradeObject;
}());
