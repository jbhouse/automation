"use strict";
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
