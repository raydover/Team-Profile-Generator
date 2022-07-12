const Employee = require("./Employee.js"); 

// Require Employee properties and methods
// Intern class with additional properties name, id, email & school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email)
        this.school = school;
    }

    // GET Method for School
    getSchool() {
        return this.school;
    }

    // GET Method
    getRole() {
        return "Intern";
    }
}

// Export Module Intern
module.exports = Intern;