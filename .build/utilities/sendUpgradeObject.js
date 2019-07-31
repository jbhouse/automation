"use strict";
// var { VersionUpgradeObject } = require("../models/VersionUpgradeObject");
var parseXML = require('./parseXML');
var existingVersion = {
    "projectName": "projectName",
    "branchName": "branchName",
    "xmlTag": { "name": "somethingOld", "version": 11 },
    "updateConsumersVersion": []
};
var newVersion = {
    "projectName": "projectName",
    "branchName": "branchName",
    "xmlTag": { "name": "somethingRandom", "version": 55 },
    "updateConsumersVersion": []
};
parseXML.changeDependencyVersions(process.argv[2], existingVersion, newVersion);
