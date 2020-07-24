const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

const csvfilepath = './customer-data.xls'

csv()
.fromFile(csvfilepath)
.then ((jSONObj)=>{
      console.log(jSONObj)
      var jsonContent = JSON.stringify(jSONObj,null,2);

     fs.writeFile(path.join(__dirname,'customer-data.json'),jsonContent, (error)=>{
      if (error) return console.error(error)
      console.log('Writing is done.')
     })

})

