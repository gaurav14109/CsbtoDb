const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/CsvConverter',(err)=>{

    if(err){
            console.log('Error Connecting to Db')
    }
    console.log('Connected to DB')
})

module.exports = db