const fs = require('fs');
const readline = require('readline');
const CsvData = require('../models/CsvData')
//insert data to database

exports.insertRecord = async (req, res) => {
    
    const fileStream = fs.createReadStream(
        req.file.destination + '/' + req.file.filename
    )
    const reader = readline.createInterface(
        {input: fileStream, crlfDelay: Infinity}
    );

    var lineCounter = 0;
    reader.on('line', function (line) {
        let csv = {
            name: '',
            email: '',
            age: '',
            dob: ''
        }
        
        if (lineCounter != 0) {
            const csvinfo = line.split(',')
          
            csv = {
                name: csvinfo[0],
                email: csvinfo[1],
                age: csvinfo[2],
                dob: csvinfo[3]
            }
            CsvData.create(csv)
        }
        lineCounter++;
    });

    res.json({msg: 'file uploaded Successfully'})

}