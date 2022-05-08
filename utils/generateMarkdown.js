// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Alt tag](https://img.shields.io/badge/license-${license}-brightgreen.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
  ## License
  License used: ${license}
  `
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //# ${data.title}
  return `
  # ${data.projectTitle}
  ${renderLicenseSection(data.projectLicense)}
  ${renderLicenseLink(data.projectLicense)}
  ${renderLicenseBadge(data.projectLicense)}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## Installation
  ${data.installInstructions}
  
  ## Usage
  ${data.usageInstructions}

  ## Contrubutions
  ${data.projectContributions}

  ## Testing
  ${data.testingIntructions}

  ## Made by
  \n
  \n
  ${data.githubName}
  ` 
}

module.exports = generateMarkdown;
//END