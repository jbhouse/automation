"use strict";
var cmd = require('./commandLine');
var filters = require('./filters.js');
filters.filterForFileName(cmd.changeDirectoryTo(process.argv[2]), "pom.xml").forEach(function (file) {
    console.log(file);
});
