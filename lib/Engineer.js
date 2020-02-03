const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super(name, id, title);
        this.title = "engineer";
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
