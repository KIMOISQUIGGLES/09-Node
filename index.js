// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app

const generateReadMe = ({title, descr, instal, useinfo, license, contr, testint, quest, licenselabel, licensemessage, licensecolor}) => 
    `
# ${title}

![your badge](https://img.shields.io/badge/<${licenselabel}>-<${licensemessage}>-<${licensecolor}>)



## Description

${descr}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${instal}

## Usage

${useinfo}


## Features

If your project has a lot of features, list them here.

## License

${license}

## How to Contribute

${contr}

## Tests

${testint}

## Questions

Got any questions?  Feel free to contact me at https://github.com/${quest}

    `;


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for your project: ',
    },
    {
        type: 'input',
        name: 'descr',
        message: 'Please enter a description for your project: ',
    },
    {
        type: 'input',
        name: 'instal',
        message: 'Please enter an installation guide for your project: ',
    },
    {
        type: 'input',
        name: 'useinfo',
        message: 'Please enter usage information for your project: ',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please enter a license information for your project: ',
    },
    {
        type: 'input',
        name: 'licenselabel',
        message: 'Please enter a license label for your project: ',
    },
    {
        type: 'input',
        name: 'licensemessage',
        message: 'Please enter a license information for your project: ',
    },
    {
        type: 'input',
        name: 'licensecolor',
        message: 'Please enter a color for your license badge: ',
    },
    {
        type: 'input',
        name: 'contr',
        message: 'Please enter contribution guidelines for your project: ',
    },
    {
        type: 'input',
        name: 'testint',
        message: 'Please enter test instructions for your project: ',
    },
    {
        type: 'input',
        name: 'quest',
        message: 'Please enter your GitHub username so others may contact you: ',
    }
])
.then((answers) => {
    const readmeContent = generateReadMe(answers);

    fs.writeFile(`READMETOO.md`, readmeContent, (err) =>
        err ? console.log(err) : console.log(`Successfully created READMETOO.md!`)
    );
});
