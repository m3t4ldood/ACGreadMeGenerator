// Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown.js');
// TODO: license options

// Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "input",
        name: "licence",
        message: "Please provide the project licence or your badge link"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];

// inquirer provides an easy way to capture user input

// TODO: Create a function to initialize app

function init() {
    inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        // axios sends asynchronous HTTP requests to REST endpoints and perform CRUD operations

        // axios.get(queryUrl).then(function(res) {
            
        //     const githubInfo = {
        //         githubImage: res.data.avatar_url,
        //         email: res.data.email,
        //         profile: res.data.html_url,
        //         name: res.data.name
        //     };
            
            // TODO: Create a function to write README file
            console.log(data)
          fs.writeFile("README.md", generate(data), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("Hey it works!");
          });
        // });

});
}

// Function call to initialize app

init();