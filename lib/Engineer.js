const Employee = require("Employee"); 

// Require Employee properties and methods
// Enginner class with additional properties name, id, email, username & Github
class Engineer extends Employee {
    constructor(name, id, email, username) {
        super (name, id, email)
        this.username = username;
    }

    // GET Method for GitHub
    getGithub() {
        return `<a href="https://github.com/${this.username}" target="_blank">https://github.com/${this.username}</a>`;;
    }

    // GET Method
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;