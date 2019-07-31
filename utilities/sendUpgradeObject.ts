// var { VersionUpgradeObject } = require("../models/VersionUpgradeObject");
var parseXML = require('./parseXML');
var upgradeDependency = require('../models/dependency');
var existingVersion = {
    "projectName": "projectName",
    "branchName": "branchName",
    "dependency": { "name": "somethingNew", "version": 21 },
    "updateConsumersVersion": []
};
var newVersion = {
    "projectName": "projectName",
    "branchName": "branchName",
    "dependency": { "name": "somethingOld", "version": 11 },
    "updateConsumersVersion": []
};

parseXML.changeDependencyVersions(process.argv[2], existingVersion, newVersion)