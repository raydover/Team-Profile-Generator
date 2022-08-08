// Required Package
const Intern = require('../lib/Intern');

// Sets up test create new intern
test('This test will Create a New Intern', () => {
    const Intern = new Intern('Aden Dover', 2, 'aden@gmail.com', 'WU');

    expect(employee.name).toBe('Aden Dover');
    expect(employee.id).toEqula(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));

})

// Sets up test all methods for intern class
test('This test will all methods for Intern class', () => {
    const employee = new Intern('Aden Dover', 2, 'aden@gmail.com', 'WU');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getschool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');

})