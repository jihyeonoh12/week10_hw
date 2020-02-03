const Employee = require('./Employee');


class Manager extends Employee {
    constructor(officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager;
