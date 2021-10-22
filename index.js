// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        messge: "what's your github username?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What's the name of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project: "
    },
    {
        type: 'list',
        name: 'license',
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Who contributed to this repo?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            writeToFile("./dist/README.md", generateMarkdown(inquirerAnswers));
        })
}

// call init
init();