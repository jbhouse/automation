"use strict";
// var cmd = require('./commandLine');
// var filters = require('./filters.js')
// filters.filterForFileName(cmd.changeDirectoryTo(process.argv[2]), "pom.xml").forEach((file: string) => {
//     console.log(file);
// });
var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser({ attrkey: "ATTR" });
// this example reads the file synchronously
// you can read it asynchronously also
var xml_string = fs.readFileSync(process.argv[2], "utf8");
parser.parseString(xml_string, function (error, result) {
    if (error === null) {
        console.log(result);
    }
    else {
        console.log(error);
    }
});
