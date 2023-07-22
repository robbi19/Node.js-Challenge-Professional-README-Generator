// Create a function that returns a license badge
// If there is no license, return an empty string
function renderContributingSection(confirmContributors, data) {
  if (!confirmContributors) {
    return `
  Thank you for making time and showing interest in helping out; however, Unfortunately I cannot accept contributions from third parties.
    `;
  } else {
    return `
  ${data}
    `;
  }
}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

 // Function that returns license in table of contents
 // If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
 }

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.what}
  ${data.why}
  ${data.how}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}
  ## Contributing
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}
  ## Tests
  ${data.test}
  ## Questions
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}
export default generateMarkdown;
