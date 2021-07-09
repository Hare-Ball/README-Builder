// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(licenseName) {
  if (licenseName === "None"){
    return "";
  }
  else{
   const licenseData = licenseName === "IBM" ? "IPL%201.0": licenseName === "Apache"? "Apache%202.0": licenseName ==="Mozilla"? "MPL%202.0": "MIT";  
 
    return `![License](https://img.shields.io/badge/License-${licenseData}-green.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseName) {
  if (licenseName === "None"){
    return "";
  }
  else{
   const licenseText = licenseName === "IBM" ? "https://opensource.org/licenses/IPL-1.0": licenseName === "Apache"? "https://opensource.org/licenses/Apache-2.0": licenseName ==="Mozilla"? "https://opensource.org/licenses/MPL-2.0": "https://opensource.org/licenses/MITT";  
 
    return `${licenseText}`
  }
}


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
${renderLicenseBadge(data.licenses)}

*This is application is covered under the ${data.licenses} license. Follow the link for more information about the license.
*${renderLicenseLink(data.licenses)}

# Questions?
* https://github.com/${data.gitHubUserName}
* Email me with additional questions at: ${data.email}

`;
}

module.exports = generateMarkdown;
