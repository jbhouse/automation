var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser({ attrkey: "ATTR" });

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync(process.argv[2], "utf8");

parser.parseString(xml_string, function (error: string, result: string) {
    if (error === null) {
        console.log(result);
    }
    else {
        console.log(error);
    }
});