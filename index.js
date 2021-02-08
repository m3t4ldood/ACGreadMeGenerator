// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./readMeGen')
// Create an array of questions for user input
function init() {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            default: 'Project Name',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Describe your project',
            default: 'Project Description',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please Link your project repository',
            default: 'https://github.com/m3t4ldood/ACGreadMeGenerator',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Please Link your deployed application',
            default: 'https://m3t4ldood.github.io/ACGreadMeGenerator',
            name: 'deployed'
        },
        {
            type: 'checkbox',
            message: 'Which technologies were used?',
            name: 'languages',
            choices: [
                'HTML', 'CSS', 'JavaScript', 'jQuery', 'Node', 'Python',
            ],
        },
        {
            type: 'input',
            message: 'Please Enter a User Story',
            default: 'loren ipsum',
            name: 'userStory'
        }
    ])

    // Create a function to write README file
    .then((response) => {
        console.log(response)
        const readmestring = generate(response)
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
}

// Function call to initialize app
init();