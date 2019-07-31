class project {
    constructor(name: string, branch: string, dependency: Dependency[]) {
        this.name = name;
        this.branch = branch;
        this.dependencies = dependency;
    }
    name: string;
    branch: string;
    dependencies: Dependency[];
}