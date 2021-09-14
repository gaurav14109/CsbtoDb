const mongoose = require('mongoose');

const CsvSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    dob:{
        type: Date
    }

},{ timestamps: true })

const CsvData = mongoose.model('CsvData', CsvSchema)

module.exports = CsvData
