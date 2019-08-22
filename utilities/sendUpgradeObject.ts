var fs = require('fs');
var parseXML = require('./parseXML');
var existingVersion: VersionUpgradeObject = {
    "projectName": "projectName",
    "branchName": "branchName",
    "xmlTag": {
        name: "plugin",
        "subTags": [
            { name: "artifactId", version: "maven-antrun-plugin", subTags: [] },
            { name: "version", version: "1.3", subTags: [] }
        ]
    },
    "updateConsumersVersion": []
};
var newVersion: VersionUpgradeObject = {
    "projectName": "projectName",
    "branchName": "branchName",
    "xmlTag": {
        name: "plugin",
        "subTags": [
            { name: "artifactId", version: "changed-the-version", subTags: [] },
            { name: "version", version: "1.8", subTags: [] }
        ]
    },
    "updateConsumersVersion": []
};

var existingTag: Tag = {
    name: "plugin",
    "subTags": [
        { name: "artifactId", version: "maven-antrun-plugin", subTags: [] },
        { name: "version", version: "1.3", subTags: [] }
    ]
};
var newTag: Tag = {
    name: "plugin",
    "subTags": [
        { name: "artifactId", version: "changed-the-version", subTags: [] },
        { name: "version", version: "1.8", subTags: [] }
    ]
};
// parseXML.changeXmlTag(fs.readFileSync(process.argv[2], "utf8"), existingVersion, newVersion);
// fs.writeFile(process.argv[2], parseXML.changeXmlTag(fs.readFileSync(process.argv[2], "utf8"), existingVersion, newVersion), 'utf8', function (err: string) {
//     console.log("done parsing xml");

//     if (err) return console.log(err);
// });
let pomFileContents = fs.readFileSync(process.argv[2], "utf8");
parseXML.changeSubTag(process.argv[2], pomFileContents, pomFileContents, existingTag, newTag);
