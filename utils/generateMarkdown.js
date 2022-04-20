function generateMarkdown(data) {
  return `# ${data.title}
  ![license](http://img.shields.io/badge/license-${data.license}-informational.svg?style=for-the-badge&logo=appveyor)

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [Contributions](#Contributions)
  * [Questions](Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.test}

  ## License
  This project's license uses ${data.license}

  ## Contributions
  ${data.contributions}

  ## Questions
  Email me with any questions at ${data.email} and view more of my projects on GitHub at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
