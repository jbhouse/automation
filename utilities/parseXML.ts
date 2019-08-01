var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser({ attrkey: "ATTR" });

//replace version object with tag
module.exports = {
    changeXmlTag: function (xml_string: string, existingTag: Tag, newTag: Tag) {
        var result = xml_string.replace(
            `<${existingTag.name}>${existingTag.version}</${existingTag.name}>`,
            `<${newTag.name}>${newTag.version}</${newTag.name}>`
        );
        return result;
    },
    changeSubTag: function (fileLocation: string, xml_string: string, xmlStringCopy: string, existingTag: Tag, newTag: Tag) {

        if (!xml_string.includes(`<${existingTag.name}>`)) {
            throw new Error('no matching tags were found');
        }
        let openingTagIndex = xml_string.indexOf(`<${existingTag.name}>`);
        let closingTagIndex = xml_string.indexOf(`</${existingTag.name}>`) + existingTag.name.length + 3;
        let parentTag = xml_string.slice(openingTagIndex, closingTagIndex);
        let parentcopy = JSON.parse(JSON.stringify(parentTag));
        let correctDependency = true;

        // verify parent tag in the xml has a matching name and verion for each sub-tag from our existingTag object
        // if so, this is the correct dependency
        existingTag.subTags.forEach(subTag => {
            if (!parentTag.includes(`<${subTag.name}>${subTag.version}</${subTag.name}>`)) {
                correctDependency = false
            }
        });
        if (correctDependency) {
            for (let i = 0; i < existingTag.subTags.length; i++) {
                parentTag = this.changeXmlTag(parentTag, existingTag.subTags[i], newTag.subTags[i]);

            }
            fs.writeFile(fileLocation, xmlStringCopy.replace(parentcopy, parentTag), 'utf8', function (err: string) {
                console.log("done parsing xml");

                if (err) return console.log(err);
            });

        } else {
            this.changeSubTag(fileLocation, xml_string.slice(closingTagIndex, xml_string.length), xmlStringCopy, existingTag, newTag);
        }

    },
    doThing: function () {

    }
}