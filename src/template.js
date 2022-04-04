// require the data that we exported from the license.js file
const {mitBadge ,icsbadge ,agplbadge ,Albadge} = require('./license');

// Set a function to create a templete and get the data placed wherever we want it to be at.
const printRequiredData = dataset => {
  console.log('data set is', dataset);
  //Destructured the data that we got back from the prompt
    const {title, about, languages, license, ...header} = dataset; 
    console.log(`data is: ${JSON.stringify(dataset)}\n`);
  return `${readAboutLicense(license)}

  ${getBadge(license)}

  # Table of  Contents

  * [Title](#title)
  * [About](#about)
  * [Built](#languages)
  * [Instalation](#header.instal)
  * [Usage](header.usage)
  * [License](#header.license)
  * [Link](#link)
  * [Contribution](#header.contribution)


  # Title: ${title}


  # About The Application:
    ${about}
    

  # Built With:
    ${languages.join(', ')}
    

  # Instalation:
    ${header.instal} 

    
  # Usage:
    ${header.usage}
  


  ## Link:  
   
  


  # Contact:
  ${header.Email}



  # Contribution:
    ${header.contribution}
`}

// Set a function that will hold a callback just in case a license is added from the user, and add a link to see the license policy
const readAboutLicense = licenseName => {
  const MIT = 'MIT'
  const ISC = 'ISC'  
  const GPL = 'GPL'
  const AL = 'AL'
  const noLicense = 'N/A'

  const licenses = [MIT, ISC, GPL, AL, noLicense]
  for (let i = 0; i< licenses.length; i++){
    console.log('license length is ', licenses[i]); 

    // if there is no license added from the user, return an empty string
    if(!licenseName){  
    return ` `

     // if a license is added from the user, return data
    }else{
      // if the license is MIT then print this
      if(licenseName === MIT){

  return `
  # license used: 
  ## ${licenseName}


  ## Read about ${licenseName} license here: 'https://choosealicense.com/licenses/mit/'
  
  `  

    // if the license is ISC then print this
    }else if(licenseName === ISC){
  return `
  # license used:  ${licenseName}



  ## Read about ${licenseName} license here:  'https://choosealicense.com/licenses/ISC/'
  `  
  
    // if the license is GPL then print this
    }else if(licenseName === GPL){
    return `
  # license used: 
  
  ## ${licenseName}


  ## Read about ${licenseName} license here:  'https://choosealicense.com/licenses/gpl-3.0/'

  `   

    // if the license is AL then print this
    }else if(licenseName === AL){
    return `
  # license used: 
  
  ## ${licenseName}


  ## Read about ${licenseName} license here:  'https://choosealicense.com/licenses/apache-2.0/'
  
  `   

  }else if(licenseName === noLicense){
    return `  
  `   
  }

  }
} 
}


// function that will allow the user to get the license badge
const getBadge = (userLicenseUsed) => {
  // If a user choose a license then check which license he choose
  if(userLicenseUsed){
    // If a user choose the MIT license then print the name and the badge of the MIT license 
    if(userLicenseUsed === 'MIT'){
    return `
  # License Badge: 
    ${mitBadge}
    `
    // If a user choose the ISC license then print the name and the badge of the ISC license 
    }else if(userLicenseUsed === 'ISC'){
      return `
  # License Badge: 
      ${icsbadge}
    `
    // If a user choose the AGL license then print the name and the badge of the AGL license 
    }else if(userLicenseUsed === 'AGL'){
      console.log(agplbadge);
      return `
  # License Badge: 
      ${agplbadge}
    `
    // If a user choose the AL license then print the name and the badge of the AL license 
    }else if(userLicenseUsed === 'AL'){
      return `
  # License Badge: 
      ${Albadge}
    `
    // If a user did not choose license then dont print anything 
    }else if(userLicenseUsed === 'N/A'){
      return `
      `
    }
  
  }
}

// export the modlule 
module.exports = templateData => {return `${printRequiredData(templateData)}`}