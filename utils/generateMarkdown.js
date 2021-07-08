// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   const MIT = ["MIT"]
//   const IBM = ["IPL%201.0"]
//   const Apache = ["Apache%202.0"]
//   const Mozilla =["MPL%202.0"]
//   const None = []
//   return license
//}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Description
${data.description}

# Table of Contents
1. [Title](#Title)
2. [Installation](#Installation)
3. [Usage Information](#Usage)
4. [Contributors](#Contributors)
5. [Testers](#Testers)
6. [License](#License)
7. [GitHub](#GitHub)

# Installation
${data.installInstruction}

# Usage
${data.usageInformation}

# Contributors
${data.contributors}

# Testers
${data.tests}

# License
[![License](https://img.shields.io/badge/License-${data.licenses}-green.svg)]
This is application is covered under the ${data.licenses} license.

# Questions?
* https://github.com/${data.gitHubUserName}
* Email me with additional questions at: ${data.email}

`;
}

module.exports = generateMarkdown;
