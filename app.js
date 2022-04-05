// require the inquirer package to use the prompt 
const inquirer = require("inquirer")
// get the template data from the template.js file
const templateData = require('./src/template')
// add a README.md file and add the data that we got back from the template.js to it.
const addFileToReadme = require('./src/index')
console.log('readme is',templateData);

// start prompting the user
const promptUserWithQuestions = () =>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please insert the title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'what is the description of this application? (Required)',
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
      message: 'What languages you used to build this application? (Required)',
      choices:['HTML','CSS','JavaScript','JQuery','Bootstrap', 'Node.js'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter all the languages that been used to build this application!');
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
          console.log('Please provide informations on how to instal this application!');
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
      message: 'What license that is used for this application? (Required)',
      choices: ['MIT', 'ISC', 'GPL','AL', 'N/A'],
    },
    {
      type: 'type',
      name: 'GitHub',
      message: 'What is your GitHub name? (Required)',
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
      name: 'Email',
      message: 'What is your Email address? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
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
promptUserWithQuestions()
.then(data => {
  // Check what data we got back and call the templateData function 
  console.log(data);
  return templateData(data);
  // Take that data from the templateData function and write a README.md file with calling the AddFileToReadme function
}).then(WriteFileResponse => {
  return addFileToReadme(WriteFileResponse)
})