const inquirer = require("inquirer");
const {writeFile, copyFile} = require("")
const generateMarkdown = require("./utils/generateMarkdown");

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
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines for people who wish to contribute to the project?',
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
    ])
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
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
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
        let readmeContent = generateMarkdown(answer);
        writeFile(readmeContent);
    })
};

// Function call to initialize app
init();

module.exports = questions;