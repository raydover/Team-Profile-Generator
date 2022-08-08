// Required Package
const Manager = require('../lib/Manager');

// Sets up test create new manager
test('This test will Create a New Manager', () => {
    const employee = new Manager('Aden Dover', 2, 'aden@gmail.com', 007);

    expect(employee.name).toBe('Aden Dover');
    expect(employee.id).toEqula(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));

})

// Sets up test all methods for manager class
test('This test will all methods for Manager class', () => {
    const employee = new Manager('Aden Dover', 2, 'aden@gmail.com', 007);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');

})