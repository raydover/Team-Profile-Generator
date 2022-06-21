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
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const fs = require('fs');
const inquirer = require('inquirer');

const managerTest = require('./tests/Employee.test.js');



//  Emplyee questions array - name, id, email, position
const questions = [
    {
        type: 'input',
        message: 'Please enter employee NAME?',
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Employee NAME to continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Employee ID?',
        name: 'id',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Employee ID to continue...')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Employee EMAIL ADDRESS:',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Employee EMAIL ADDRESS to continue...')
                return false;
            }
        }
    },
    {
        type: 'rawlist',
        message: 'Enter Employee POSITION:',
        name: 'position',
        choices: ['Manager', 'Engineer', 'Intern'],
        validate: positionInput => {
            if (positionInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Employee POSITION to continue...')
                return false;
            }
        }
    },
    // ]

    // Manager question office number
    // const managerQuestions = [
    {
        type: 'input',
        message: 'Enter Managers OFFICE NUMBER:',
        name: 'officeNumber',
        when: (input) => input.position === 'Manager',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Required -Enter a Manager OFFICE NUMER to Continue...')
                return false;
            }
        }
    },
    // ]


    // Enginner question GitHub username
    // const engineerQuestions = [
    {
        type: 'input',
        message: 'Enter Manager GitHub USERNAME:',
        name: 'gitHub',
        when: (input) => input.position === 'Engineer',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter a GitHub USERNAME to Continue...')
                return false;
            }
        }
    },
    // ]

    // Intern question GitHub username
    // const internQuestions = [
    {
        type: 'input',
        message: 'Enter Intern School:',
        name: 'school',
        when: (input) => input.position === 'Intern',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('REQUIRED - Enter Intern School to Continue.')
                return false;
            }
        }
    }
    // ]
]

// Function to initalize application
function init() {

}


//  Prompt quesitons - manager, engineer and intern question
inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    // inquirer.prompt(managerQuestions).then((answers) => {
    //     console.log(answers);

    //     inquirer.prompt(engineerQuestions).then((answers) => {
    //         console.log(answers);

    //         inquirer.prompt(internQuestions).then((answers) => {
    //             console.log(answers);


    //         });
    //     });
    // });
});

// Function to write to the index.html file JSON string answers
// fs.writeFile(
//     './dist/index.html',
//     JSON.stringify({answers}, null, 2), 
//     (err) => {
//     err ? console.error(err) : console.log('Success!');
//     },
// );


// Function call to initialize application
init();


