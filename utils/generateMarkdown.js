
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (
    `## License 📛
    Copyright © ${license}. All rights reserved. 
    
    Licensed under the ${license} license.`

  )
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Contributors](#Contributors)
  * [Usage](#Usage)
  * [Test](#Test)
  * [License](#License)



  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  To run tests, run these commands:
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions
  * Github repository: ${data.github} (https://github.com/${data.github}/)
  * If you have further questions, contact me at ${data.email}
`;
}

//render badge
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}


module.exports = generateMarkdown;
