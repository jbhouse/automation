"use strict";
var project = /** @class */ (function () {
    function project(name, branch, dependency) {
        this.name = name;
        this.branch = branch;
        this.dependencies = dependency;
    }
    return project;
}());
