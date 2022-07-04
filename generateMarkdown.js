const fs = require('fs');
const inquirer = require('inquirer');
const indexFile = require('./index.js');
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// Return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Return the license section
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.Description}

  ## Table of Contents
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contributors](#contributors)
  ### [Tests](#tests)
  ### [Contact](#contact)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Contact
  Github: github.com/${data.username}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
