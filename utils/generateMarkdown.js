var generateMarkdown = function(data){
    return `# ${data.title}
## Description 
${data.description}
## Table of contents
* [installation](#installation)
* [usage](#usage)
* [license](#license)
* [contributors](#contributors)
* [test](#test)
* [username](#username)
* [repo](#repo)
## installation
${data.installation}
## usage
${data.usage}
## licence
${data.licence}
## contributors
${data.contributing}
## test
${data.test}
## username
${data.username}
## repo
${data.repo}
`;
}

module.exports = generateMarkdown;