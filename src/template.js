const readAboutLicense = licenseName => {
  if(!licenseName){
    return ` `
  }
    return `
   # license used: 
   ${licenseName}

   ### Read about ${licenseName} license here:  https://choosealicense.com/licenses/`
  }




module.exports = templateData => {
  //, we create the projects and about variables the same way we did before, but we're taking the rest of the data that hasn't 
  //  been destructured from templateData and storing it in a new object, called header
  const {title, about, languages, ...header } = templateData; 
  console.log(`data is: ${JSON.stringify(templateData)}\n`);
  console.log(header);

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
    
`
}