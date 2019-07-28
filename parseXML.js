const cmd = require('./commandLine');
const filters = require('./filters.js')

let path = process.argv[2];

filters.filterForFileName(cmd.changeDirectoryTo(path), "pom.xml").forEach(file => {
    console.log(file);
});