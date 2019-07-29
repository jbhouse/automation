var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser({ attrkey: "ATTR" });

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync(process.argv[2], "utf8");
var result = xml_string.replace("<directory>${project.basedir}/target</directory>", '<directory>${project.basedir}/targeted</directory>');
fs.writeFile(process.argv[2], result, 'utf8', function (err: string) {
    if (err) return console.log(err);
});
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