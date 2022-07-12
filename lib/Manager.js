const Employee = require("./Employee.js"); 

// Require Employee properties and methods
// Manager class with property name, id, email & officeNumber
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber;
    }

    // GET Method for officeNumber
    // getofficeNumber() {
    //     return this.officeNumber;
    // }

    // GET Method
    getRole() {
        return "Manager";
    }
}

// Export Module Manager
module.exports = Manager;