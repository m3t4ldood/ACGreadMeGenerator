// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./readMeGen')
// Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            default: 'Project Name',
            name: 'readMeGen'
        },
        {
            type: 'input',
            message: 'Describe your project',
            default: 'Project Description',
            name: 'a readme markdown file generator'
        },
        {
            type: 'input',
            message: 'Please Link your project repository',
            default: 'Repository Link',
            name: 'https://github.com/m3t4ldood/ACGreadMeGenerator'
        },
        {
            type: 'input',
            message: 'Please Link your deployed application',
            default: 'Deployed App Link',
            name: 'https://m3t4ldood.github.io/ACGreadMeGenerator'
        },
        {
            type: 'checkbox',
            message: 'Which technologies were used?',
            name: 'coding languages',
            choices: [
                'HTML', 'CSS', 'JavaScript', 'jQuery', 'Node', 'Python',
            ],
        },
        {
            type: 'input',
            message: 'Please Enter a User Story',
            default: 'loren ipsum',
            name: 'user story'
        }
    ])

    // Create a function to write README file
    .then((response) => {
        console.log(response)
        const readmestring = generateREADME(response)
        console.log(readmestring)
        fs.writeToFile("README.md", readmestring, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('IT WORKS!')
            }
        })
    })


// Create a function to initialize app
function init() { }

// Function call to initialize app
init();