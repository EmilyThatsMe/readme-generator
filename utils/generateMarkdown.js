
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

  ## Github URL
  [${data.github}] (https://github.com/${data.github}/)

  ## Description
  ${data.description}

  ## Table of Contents
  * Installation
  * Contributors
  * Usage
  * Test
  * License



  ## Installation
  ${data.installation}

  ## Contributors
  ${data.contributors}

  ## Tests
  To run tests, run these commands:
  ${data.test}


  ${renderLicenseSection(data.license)}
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
