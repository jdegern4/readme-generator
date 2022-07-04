const inquirer = require("inquirer");
const {writeFile, copyFile} = require("")

// TODO: Include packages needed for this application
const generatePage = require()
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
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
            message: 'Please provide a brief description of the functionality of your project (Required)',
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
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What usage information does the user need to know?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines for people who wish to contribute to the project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the instructions for testing your application?',  
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
