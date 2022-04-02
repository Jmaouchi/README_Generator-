// Set a function to create a templete and get the data placed wherever we want it to be at.
const printRequiredData = dataset => {
  console.log('data set is', dataset);
  //Destructured the data that we got back from the prompt
    const {title, about, languages, ...header} = dataset; 
    console.log(`data is: ${JSON.stringify(dataset)}\n`);

  return `
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

  # Live Link To The Application:  
    https://${header.GitHub}.github.io/${header.link}/
        
  # Contribution:
    ${header.contribution}
`}

// Set a function that will hold a callback just in case a license is added from the user.
const readAboutLicense = licenseName => {
if(!licenseName){
  return ` `
}
  return `
  # license used: 
   ${licenseName}

  ### Read about ${licenseName} license here:  https://choosealicense.com/licenses/`
}

// export the modlule 
module.exports = templateData => {return `${printRequiredData(templateData)}`}