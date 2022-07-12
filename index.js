// AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab


const fs = require('fs');
const inquirer = require('inquirer');

// Require modules from local directory
const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

let employees = [];

//  Emplyee questions array - name, id, email, position
const questions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Please enter Manages Name?',
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log('REQUIRED - Enter Manager Name to continue...')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter Manager ID?',
                name: 'managerId',
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log('REQUIRED - Enter Manager ID to continue...')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter Manager Email:',
                validate: ManagerEmailInput => {
                    if (ManagerEmailInput) {
                        return true;
                    } else {
                        console.log('Required - Enter Manager Email to Continue...')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Enter Manager Office Number:',
                validate: ManagerOfficeNumberInput => {
                    if (ManagerOfficeNumberInput) {
                        return true;
                    } else {
                        console.log('Required - Enter Manager Office Number to Continue...')
                        return false;
                    }
                }
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.ManagerOfficeNumber
            );
            employees.push(manager);
            repeatQuestions();
        });
};

const repeatQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'employeeposition',
                message: 'Enter Employee Position to Add:',
                name: 'employeePosition',
                choices: ['Engineer', 'Intern'],
                validate: employeepositionInput => {
                    if (employeepositionInput) {
                        return true;
                    } else {
                        console.log('REQUIRED - Enter Employee Position to Add to continue...')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeename',
                message: 'Please Enter Employee Name:',

                validate: employeeNameInput => {
                    if (employeeNameInput) {
                        return true;
                    } else {
                        console.log('REQUIRED - Enter Employee Name to continue...')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter Employee ID:',
                name: 'EmployeeId',
                validate: employeeIdInput => {
                    if (employeeIdInput) {
                        return true;
                    } else {
                        console.log('REQUIRED - Enter Employee ID to continue...')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter Employee Email:',
                name: 'employeeEmail',
                validate: employeeEmailInput => {
                    if (employeeEmailInput) {
                        return true;
                    } else {
                        console.log('REQUIRED - Enter Employee Email to continue...')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: 'Enter Manager GitHub USERNAME:',
                when: (input) => input.employeePosition === 'Engineer',
                validate: engineerGitHubInput => {
                    if (engineerGitHubInput) {
                        return true;
                    } else {
                        console.log('REQUIRED - Enter a GitHub USERNAME to Continue...')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter Intern School:',
                name: 'internSchool',
                when: (input) => input.EmployeePosition === 'Intern',
                validate: internSchoolInput => {
                    if (internSchoolInput) {
                        return true;
                    } else {
                        console.log('REQUIRED - Enter Intern School to Continue.')
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                message: "Do you have another employee to add?",
                name: "repeat",
            },
        ])
        .then((answers) => {
            if (answers.employeePosition === 'Intern') {
                const intern = new Intern(
                    answers.employeeName,
                    answers.employeeId,
                    answers.employeeEmail,
                    answers.internSchool
                );
                employees.push(intern);
            }
            if (answers.employeePosition === "Engineer") {
                const engineer = new Engineer(
                    answers.employeeName,
                    answers.employeeId,
                    answers.employeeEmail,
                    answers.engineerGitHubUsername
                );
                employees.push(engineer);
            }
            if (answers.repeat === true) {
                repeatQuestions();
            } else {
                writeToFile("./dist/index.html", generateHTML(employees));
            }
        });
};

// Function to write to the index.html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(`Error Message: ${err}`) : console.log("Success!");
    });
}

// Initialize Application
function init() {
    questions();
}

// Invoke init funciton to begin questions
init();
