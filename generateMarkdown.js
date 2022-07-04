const fs = require('fs');
const inquirer = require('inquirer');
const indexFile = require('./index.js');

// 
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'Apache') {
    licenseBadge = '![Apache License logo](https://upload.wikimedia.org/wikipedia/commons/5/5f/Apache_Commons_logo.svg)';
  } else if (license === 'BSD') {
    licenseBadge = '![BSD License logo](https://upload.wikimedia.org/wikipedia/commons/b/bf/License_icon-bsd.svg)';
  } else if (license === 'GNU General Public License') {
    licenseBadge = '![GNU General Public License logo]https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GPLv3_Logo.svg/320px-GPLv3_Logo.svg.png)';
  } else if (license === 'MIT') {
    licenseBadge = '![MIT License logo](https://upload.wikimedia.org/wikipedia/commons/c/c3/License_icon-mit.svg)';
  } else {
    licenseBadge = '';
  }
  return licenseBadge;
}

// Return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache') {
    licenseLink = '[Licensed under Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD') {
    licenseLink = '[Licensed under the New BSD License](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'GNU General Public License') {
    licenseLink = '[Licensed under the GNU General Public License](https://opensource.org/licenses/gpl-license)';
  } else if (license === 'MIT') {
    licenseLink = '[Licensed under the MIT License](https://opensource.org/licenses/MIT)';
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contributors](#contributors)
  ### [Tests](#tests)
  ### [Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  Github: github.com/${data.username}
  Email: ${data.email}
`;
};

module.exports = generateMarkdown;
