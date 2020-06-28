const jsonFile = './data.json'
const fs = require('fs-extra')

function writeData(req, res, next) {
  const newUser = req.body // We know the data in the form is our new user we want to make

  fs.readFile(jsonFile, (err, content) => { // First we read the jsonFile and see whats inside
    if (err) return console.log(err) // catch errors as they occur
    
    const contentJSON = JSON.parse(content) // parse the json file to workable javascript-object
    
    console.log(contentJSON) // output: { users: [] }
    console.log(newUser) // output: { firstName: 'Wouter', lastName: 'Heijde' }
    
    // for the next step we want to .push() our newUser to contentJSON.users wich is an array
    contentJSON.users.push(newUser)

    // and save the jsonFile again
    fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => { 
      // these fancy parameters I put in the stringyfy
      // makes sure the data.json gets nicely formatted 
      if (err) console.log(err)
    })


  })
}

module.exports = { writeData }