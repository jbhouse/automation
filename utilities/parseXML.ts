var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser({ attrkey: "ATTR" });

module.exports = {
    changeDependencyVersions: (fileLocation: string, existingDependency: VersionUpgradeObject, newDependency: VersionUpgradeObject) => {
        let xml_string = fs.readFileSync(fileLocation, "utf8");
        var result = xml_string.replace(
            `<${existingDependency.xmlTag.name}>${existingDependency.xmlTag.version}</${existingDependency.xmlTag.name}>`,
            `<${newDependency.xmlTag.name}>${newDependency.xmlTag.version}</${newDependency.xmlTag.name}>`
        );
        fs.writeFile(process.argv[2], result, 'utf8', function (err: string) {
            console.log("done parsing xml");

            if (err) return console.log(err);
        });
    }
}