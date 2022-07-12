// Employee parent class with properties name, id , email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // GET Method
    getName() {
        return this.name;
    }

    // GET Method
    getId() {
        return this.id;
    }

    // GET Method
    getEmail() {
        return this.email;
    }

    // GET Method
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;