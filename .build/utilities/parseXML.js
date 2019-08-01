"use strict";
var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser({ attrkey: "ATTR" });
//replace version object with tag
module.exports = {
    changeXmlTag: function (xml_string, existingTag, newTag) {
        var result = xml_string.replace("<" + existingTag.name + ">" + existingTag.version + "</" + existingTag.name + ">", "<" + newTag.name + ">" + newTag.version + "</" + newTag.name + ">");
        return result;
    },
    changeSubTag: function (fileLocation, xml_string, xmlStringCopy, existingTag, newTag) {
        if (!xml_string.includes("<" + existingTag.name + ">")) {
            throw new Error('no matching tags were found');
        }
        var openingTagIndex = xml_string.indexOf("<" + existingTag.name + ">");
        var closingTagIndex = xml_string.indexOf("</" + existingTag.name + ">") + existingTag.name.length + 3;
        var parentTag = xml_string.slice(openingTagIndex, closingTagIndex);
        var parentcopy = JSON.parse(JSON.stringify(parentTag));
        var correctDependency = true;
        var ok;
        // verify parent tag in the xml has a matching name and verion for each sub-tag from our existingTag object
        // if so, this is the correct dependency
        existingTag.subTags.forEach(function (subTag) {
            if (!parentTag.includes("<" + subTag.name + ">" + subTag.version + "</" + subTag.name + ">")) {
                correctDependency = false;
            }
        });
        if (correctDependency) {
            for (var i = 0; i < existingTag.subTags.length; i++) {
                // let newParentTag = '';
                parentTag = this.changeXmlTag(parentTag, existingTag.subTags[i], newTag.subTags[i]);
                // xml_string.replace(parentTag, newParentTag);
                // console.log(newParentTag);
            }
            // console.log(xmlStringCopy);
            fs.writeFile(fileLocation, xmlStringCopy.replace(parentcopy, parentTag), 'utf8', function (err) {
                console.log("done parsing xml");
                if (err)
                    return console.log(err);
            });
            // console.log(parentcopy);
            // console.log(parentTag);
        }
        else {
            this.changeSubTag(fileLocation, xml_string.slice(closingTagIndex, xml_string.length), xmlStringCopy, existingTag, newTag);
        }
    },
    doThing: function () {
    }
};
