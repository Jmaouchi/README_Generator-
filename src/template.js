// Set a function to create a templete and get the data placed wherever we want it to be at.
const printRequiredData = dataset => {
  console.log('data set is', dataset);
  //Destructured the data that we got back from the prompt
    const {title, about, languages, ...header} = dataset; 
    console.log(`data is: ${JSON.stringify(dataset)}\n`);

  return `
  # Table Content

  * [title](#title)
  * [about](#about)
  * [langueges](#languages)
  * [instalation](#header.instal)
  * [Usage](header.usage)
  * [License](#header.license)
  * [Live-link](#link)
  * [Contribution](#header.contribution)



  # Title: ${title}


  # About The Application:
    ${about}


  # Built With:
    ${languages.join(', ')}
    

  # Instalation process:
    ${header.instal} 

    
  # Usage Of The Application:
    ${header.usage}
  

  ${readAboutLicense(header.license)}


  ## Live Link To The Application:  
        

  # Contribution:
    ${header.contribution}
`}

// Set a function that will hold a callback just in case a license is added from the user, and add a link to see the license policy
const readAboutLicense = licenseName => {
  const MIT = 'MIT'
  const ISC = 'ISC'  
  const GPL = 'GPL'
  const AGL =  'AGL'
  const AL = 'AL'

  const licenses = [MIT, ISC, GPL, AGL, AL]
  for (let i = 0; i< licenses.length; i++){
    console.log('license length is ', licenses[0]); 
    if(!licenseName){
    return ` `
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

    // if the license is AGL then print this
    }else if(licenseName === AGL){
    return `
  # license used: 
  
  ## ${licenseName}


  ## Read about ${licenseName} license here:  'https://choosealicense.com/licenses/agpl-3.0/'

  `  
  
    // if the license is AL then print this
    }else if(licenseName === AL){
    return `
  # license used: 
  
  ## ${licenseName}


  ## Read about ${licenseName} license here:  'https://choosealicense.com/licenses/apache-2.0/'
  
  `   

  }

  }
} 
}

// export the modlule 
module.exports = templateData => {return `${printRequiredData(templateData)}`}