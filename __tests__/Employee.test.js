// Required Package
const Employee = require('../lib/Employee');

// Sets up test create new employee
test('This test will Create a New Employee', () => {
    const employee = new Employee('Aden Dover', 2, 'aden@gmail.com');

    expect(employee.name).toBe('Aden Dover');
    expect(employee.id).toEqula(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})

// Sets up test all methods for employee class
test('This test will all methods for Employee class', () => {
    const employee = new Employee('Aden Dover', 2, 'aden@gmail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');

})