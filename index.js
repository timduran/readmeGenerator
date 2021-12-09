const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/createMarkdown.js')

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
  },
  {
    type: 'input',
    name: 'Table of Contents',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Please enter Installation'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'What is your usage?'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What licenses is this project under?',
    choices: ['MIT', 'GNU', 'OBSD', 'APACHE', 'ISC', 'None']
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'What are you contributing?'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Enter email:'
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Any more questions?'
  },
]

const askQuestions = () => {
  return inquirer.prompt(questions)
}

const writeToFile = pageMD => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', pageMD, err => {
      if (err) {
        reject(err)
        return;
      }
      resolve({
        ok: true,
        message: 'README created, check dist directory.'
      })
    })
  })
}

askQuestions()
  .then(data => {
    return createMarkdown(data);
  })
  .then(pageMD => {
    return writeToFile(pageMD)
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse.message)
  })
  .catch(err => {
    console.log(err)
  })