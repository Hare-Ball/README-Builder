// TODO: Include packages needed for this application
const inquire = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    
    },
    {
        type: "input",
        name: "gitHubUserName",
        message: "What is your GitHub username?"
    
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project."
    
    },
    {
        type: "input",
        name: "installInstruction",
        message: "Enter the installation instructions for your project."
    
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Describe how to use your application."
    
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    
    },
    {
        type: "input",
        name: "tests",
        message: "Who tested this project?"
    
    },
    {
        type: "list",
        name: "licenses",
        message: "Choose a license.",
        choices: ["MIT", "Apache", "None"]
    
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.MD",data,(err) =>{
        if(err){
            return err
        }
        console.log("File Success!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then(
        answers=>{
            console.log(answers)
            let template = generateMarkdown(answers)
            console.log(template)
            writeToFile(template)
        }
    )
}

// Function call to initialize app
init();
