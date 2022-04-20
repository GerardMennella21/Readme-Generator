// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the title of your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter a description of your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions to install your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter instructions to install your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter usage information for your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the command used to run tests',
            default: 'npm run test'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the projects license type',
            choices: [
                "Apache_License_2.0",
                "GNU_General_ Public_License_v3.0",
                "MIT_License",
                "Mozilla_Public_License_2.0",
                "Eclipse_Public_License_2.0",
                "Boost_Software_License_1.0",
                "Creative_Commons_Zero_v1.0_Universal"
            ]
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Enter information regarding contributing to your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter information regarding contributing to your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter your GitHub username!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter your email address!')
                    return false
                }
            }
        }
    ])
}

const writeToFile = (fileName, data) => {
    
}

// TODO: Create a function to initialize app
function init() {questions()}

// Function call to initialize app
init();
