// Required Package
const Engineer = require('../lib/Engineer');

// Sets up test create new engineer
test('This test will Create a New Engineer', () => {
    const employee = new Engineer('Aden Dover', 2, 'aden@gmail.com', 'aden-dover');

    expect(employee.name).toBe('Aden Dover');
    expect(employee.id).toEqula(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.gitHub).toEqual(expect.any(String));

})

// Sets up test all methods for engineer class
test('This test will all methods for Engineer class', () => {
    const employee = new Engineer('Aden Dover', 2, 'aden@gmail.com', 'aden-dover');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.gitHub);
    expect(employee.getRole()).toBe('Engineer');

})

