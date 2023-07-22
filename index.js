//  Include packages 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

//  Create an array 
function promptUser() {
    return inquirer.prompt([

        // title of project
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project titled?',
        },

        // section: Description    
        {
            type: 'input',
            name: 'description',
            message: 'Briefly describe your project.',
        },

        // section: Installation
        {
            type: 'input',
            name: 'install',
            message: 'What installations are required?',
        },

        // section: Usage
        {
            type: 'input',
            name: 'use',
            message: 'What is the use of the application?',
        },

        // section:License 
        // choose a license for my app
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose the license you would like to add for your project',
            choices: [
                'afl--3.0', 'apache--2.0', 'artistic--2.0', 'bsl--1.0', 'bsd--2--clause', 'bsd--3--clause', , 'lgpl--2.1', 'lgpl--3.0', 'isc', 'ms--pl', 'mit', , 'unlicense', 'zlib'],
        },

        // section:Contributing 
        {
            type: 'input',
            name: 'contributers',
            message: 'Are there any contribution rules?',
        },

        // section:Tests 
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for project, and how to test, if applicable.',
        },

        // section: Questions
        // WHEN I enter my GitHub username
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GITHUB username?',
        },
        // THEN this is added 

        // WHEN I enter my email address
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ])
};

// function to write README file generated with Table of Contents
// click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README
function generateREADME(answers) {
    return `# ${answers.projectTitle}

    ![Badge for License](https://img.shields.io/badge/License-${answers.license}-blue)
    1. [Description](#description)
    2. [Installation ](#installation)
    3. [Usage](#usage)
    4. [Contributor](#contributor)
    5. [Tests](#tests)
    6. [Credits](#credits)
    7. [License](#license)
    8. [Questions](#questions)
    ##  Description
    * ${answers.description}
    ## Installation
    * ${answers.install}
    ## Usage 
    * ${answers.use}
    ## Contributor 
    * ${answers.contributers}
    ## Tests
    * ${answers.tests}
    ## Credits
    * ${answers.credits}
    ## License
    * licensed under ${answers.license}
    ## Questions
    * For additional help or questions about collaboration, please reach out to me at ${answers.email}
    * Follow me on Github at [${answers.githubUsername}] (http://github.com/${answers.githubUsername})`;
}
//writes file to README.md
 promptUser()
  .then(function (answers) {
    const README = generateREADME(answers);

    return writeFileAsync('sampleREADME.md', README);
  })
  .then(function () {
    console.log("sampleREADME.md has been created!");
  })
  .catch(function (err) {
    console.log(err);
  });