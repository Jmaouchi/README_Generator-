// require the data that we exported from the license.js file
const {mitBadge ,icsbadge ,agplbadge ,Albadge} = require('./license');

// Set a function to create a templete and get the data placed wherever we want it to be at.
const printRequiredData = dataset => {
  console.log('data set is', dataset);
  //Destructured the data that we got back from the prompt
    const {title, about, languages, license, ...header} = dataset; 
    console.log(`data is: ${JSON.stringify(dataset)}\n`);
  
  // return a template that will hold the data 
  return `${getBadge(license)}
  



  # Title: ${title}



  # Table of  Contents

  * [Title](#title)
  * [About](#about)
  * [Built](#languages)
  * [Instalation](#header.instal)
  * [Usage](header.usage)
  * [License](#header.license)
  * [Link](#link)
  * [Contribution](#header.contribution)



  # About The Application:
    ${about}
    

  # Built With:
    ${languages.join(', ')}
    

  # Instalation:
    ${header.instal} 

  
  
  # Watch me do it!
    ![](sample/test.gif)



    
  # Usage:
    ${header.usage}
  


  ## Link:  
   ${header.link}
  


  # Contact:
  ${header.Email}



  # Contribution:
    ${header.contribution}
`}


// A function that will allow the user to get the license and the license badge
const getBadge = (userLicenseUsed) => {

    // If a user choose the MIT license then print the license name / the license badge / a link to that license 
    if(userLicenseUsed === 'MIT'){
    return `
  # license used:  ${userLicenseUsed}  [![License](https://img.shields.io/apm/l/npm)](https://choosealicense.com/licenses/mit/)


  ## Read about ${userLicenseUsed} license here:  'https://choosealicense.com/licenses/mit/'


    ${mitBadge}

    `

    // If a user choose the ISC license then print the license name / the license badge / a link to that license
    }else if(userLicenseUsed === 'ISC'){
      return `
  # license used:  ${userLicenseUsed}  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

  ## Read about ${userLicenseUsed} license here:  'https://choosealicense.com/licenses/ISC/'

      ${icsbadge}
    `
    // If a user choose the AGL license then print the license name / the license badge / a link to that license 
    }else if(userLicenseUsed === 'GPL'){
      console.log(agplbadge);
      return `
  # license used:  ${userLicenseUsed}  [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)  
      
  ## Read about ${userLicenseUsed} license here: https://choosealicense.com/licenses/gpl-3.0/


      ${agplbadge}
    `
    // If a user choose the AL license then print the license name / the license badge / a link to that license
    }else if(userLicenseUsed === 'AL'){
      return `
  # license used: Apache-2.0   [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  
  ## Read about Apache-2.0  license here:


      ${Albadge}
    `
    // If a user did not choose license then dont print anything 
    }else if(userLicenseUsed === 'N/A'){
    
      return `
      `
    }
  
}

// export the modlule 
module.exports = templateData => {return `${printRequiredData(templateData)}`}