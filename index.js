const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of the functionality of your project.',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What does the user need to do to install your application?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What usage information does the user need to know?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Under which license(s) are your application covered?',
            choices: ['Apache', 'BSD', 'GNU General Public License', 'MIT', 'No license'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who has contributed to this project?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a list of contributors!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the instructions for testing your application? (CLI commands, etc)',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
    ])
};

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(function(answer) {
        console.log(answer);
        let readmeContent = generateMarkdown(answer);
        writeFile(readmeContent);
    })
};

// Function call to initialize app
init();

module.exports = questions;