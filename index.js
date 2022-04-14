// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?"  
    },
    {
        type: "input",
        name: "githubName",
        message: "What is your GitHub username?"
    },
    {
        type: "list",
        name: "projectLicense",
        message: "What licenses are you using?",
        choices: ['Apache_2.0', 'BSD_3', 'GPL', 'MIT', 'Mozilla_Public_License_2.0', 'None']
    }    
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), 'test/', fileName), data)
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(res => writeToFile('test.md', generateMarkdown(res)))
}

// Function call to initialize app
init();
