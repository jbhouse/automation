// var { VersionUpgradeObject } = require("../models/VersionUpgradeObject");
var xml2js = require('xml2js');
var fs = require('fs');
// var jsonxml = require('jsontoxml');
var parser = new xml2js.Parser({ attrkey: "ATTR" });

module.exports = {
    changeDependencyVersions: (fileLocation: string, existingDependency: VersionUpgradeObject, newDependency: VersionUpgradeObject) => {
        let xml_string = fs.readFileSync(fileLocation, "utf8");
        var result = xml_string.replace(
            `<${existingDependency.dependency.name}>${existingDependency.dependency.version}</${existingDependency.dependency.name}>`,
            `<${newDependency.dependency.name}>${newDependency.dependency.version}</${newDependency.dependency.name}>`
        );
        fs.writeFile(process.argv[2], result, 'utf8', function (err: string) {
            console.log("done parsing xml");

            if (err) return console.log(err);
        });
    }
}
// parser.parseString(xml_string, function (error: string, result: any) {
//     if (error === null) {
//         console.log(result['project']['build'][0]['directory'][0]);
//         result['project']['build'][0]['directory'][0] = "./target";
//         console.log(result['project']['build'][0]['directory'][0]);

//     }
//     else {
//         console.log(error);
//     }
// });