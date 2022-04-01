// require the inquirer package to use the prompt 
const inquirer = require("inquirer");
// get the template data from the template.js file
const templateData = require('./src/template')
// add a README.md file and add the data that we got back from the template.js to it.
const addFileToReadme = require('./src/files')
console.log('readme is',templateData);


// start prompting the user
const promptUser = () =>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What the title of your feature? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Please add a Description of this feature? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the description of this application!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages you used to build this feature? (Required)',
      choices:['HTML','CSS','JavaScript','JQuery','Bootstrap'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter all languages used for building this application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'instal',
      message: 'How to instal this application? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please provide infos on how to instal this application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the main usage of this application? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the application usage!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license you used on this application? (Required)',
      choices: ['MIT', 'ISC','GNU','copyright','copyleft','NaN'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the license used!');
          return false;
        }
      }
    },
    {
      type: 'type',
      name: 'GitHub',
      message: 'What is your name on GitHub? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your github name!');
          return false;
        }
      }
    },
    {
      type: 'type',
      name: 'link',
      message: 'What is the github link to this application? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please add a github link to this application!');
          return false;
        }
      }
    },
    {
      type: 'type',
      name: 'contribution',
      message: 'Add a contribution to this application! (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please add a contribution to this application!');
          return false;
        }
      }
    },
    
  ])
}
//stop prompting the user


// callback functions to get the data back
promptUser()
.then(data => {
  console.log(data);
  return templateData(data);
}).then(WriteFileResponse => {
  return addFileToReadme(WriteFileResponse)
  // console.log(writeFile);
})