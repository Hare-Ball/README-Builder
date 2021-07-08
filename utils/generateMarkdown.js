// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Description
${data.description}

# Table of Contents
*[Title](#Title)
*[Installation](#Installation)
*[Usage Information](#Usage)
*[Contributors](#Contributors)
*[Testers](#Testers)
*[License](#License)
*[GitHub](#GitHub)

# Installation
${data.installInstruction}

#Usage
${data.usageInformation}

#Contributors
${data.contributors}

#Testers
${data.tests}

#License
[![License](https://img.shields.io/badge/License-${data.licenses}-blue.svg)]
This is application is covered under the ${data.licenses} license.

#Questions?
* https://github.com/${data.gitHubUserName}
* Email me with additional questions at: ${data.email}

`;
}

module.exports = generateMarkdown;
