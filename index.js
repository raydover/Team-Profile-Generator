const fs = require('fs');
const inquirer = require('inquirer');

// Require modules from local directory
const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

let employees = [];

//  Add manager questions array - name, id, email, office number
const addManager = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Manager Name?',
        validate: nameInput => {
            if (nameInput) {
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
        name: 'id',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Manager ID to continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Manager Email:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Required - Enter Manager Email to Continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Manager Office Number:',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Required - Enter Manager Office Number to Continue...')
                return false;
            }
        }
    },
    {
        name: 'addAnotherEmployee',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
        validate: anotherEmployeeInput => {
            if (anotherEmployeeInput) {
                return true;
            } else {
                console.log('Required - Enter a choice to Continue...')
                return false;
            }
        }
    },
];

//  Add Enginner questions array - name, id, email, github
const addEngineer = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Engineer Name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Engineer Name to continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Engineer ID?',
        name: 'id',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Engineer ID to continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Engineer Email:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Required - Enter Engineer Email to Continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter Engineer GitHub:',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Required - Enter Engineer GitHub to Continue...')
                return false;
            }
        }
    },
    {
        name: 'addAnotherEmployee',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
        validate: anotherEmployeeInput => {
            if (anotherEmployeeInput) {
                return true;
            } else {
                console.log('Required - Enter a choice to Continue...')
                return false;
            }
        }
    },
];

//  Add Intern questions array - name, id, email, school
const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Intern Name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Intern Name to continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Intern ID?',
        name: 'id',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Intern ID to continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Intern Email:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Required - Enter Intern Email to Continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter Intern School:',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Required - Enter School GitHub to Continue...')
                return false;
            }
        }
    },
    {
        name: 'addAnotherEmployee',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
        validate: anotherEmployeeInput => {
            if (anotherEmployeeInput) {
                return true;
            } else {
                console.log('Required - Enter a choice to Continue...')
                return false;
            }
        }
    },
];

// Initialize Application
ask(addManager);

// Function cycle questions add anothe employee
function ask(questionArray) {
    inquirer
        .prompt(questionArray)
        .then((teamMember) => {
            employees.push(teamMember);

            if (teamMember.addAnotherEmployee === 'Add Enginner') {
                ask(addEngineer);
            } else if (teamMember.addAnotherEmployee === 'Add Intern') {
                ask(addIntern);
            } else {
                createTeamProfiles(teamMember);
            }
        })
        .catch((err) => console.log(err));
}

function createTeamProfiles(teamMember) {
    const teamProfiles = team.map((teamMember) => {
        const { name, id, email } = teamMember;

        if (teamMember.hasOwnProperty('officeNumber')) {
            const { officeNumber } = teamMember;
            return new Manager (name, id, email, officeNumber);
        }

        if (teamMember.hasOwnProperty('gitHub')) {
            const { gitHub } = teamMember;
            return new Engineer (name, id, email, gitHub);
        }

        if (teamMember.hasOwnProperty('school')) {
            const { school } = teamMember;
            return new Intern (name, id, email, school);
        }
    })

}



// Function to write to the index.html file
function writeHtml(newHtml) {
    fs.writeFile('./dist/index.html', newHtml, (err) => {
        if (err) throw err;
        console.log('Team Profile Successfully Generated!');
    });
};


