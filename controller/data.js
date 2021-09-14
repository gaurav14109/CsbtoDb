const CsvData = require('../models/CsvData');
exports.getData = async (req, res) => {
    try {
        const data = await CsvData.find()
        res.json(data)
    } catch (err) {
        console.log(err)
    }
}

exports.newData = async (req, res) => {

        let user = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            dob: req.body.dob
        }
        await CsvData.create(user)

        res.json({msg: 'data Created Successfully'})
}

exports.updateData = async (req, res) => {
    
    try {
        let user = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            dob: req.body.dob
        }
      await CsvData.findByIdAndUpdate(req.params.id, user, {new: true})
       
        res.json({msg: 'data Updated Successfully'})

    } catch (err) {
        console.log(err)
    }

}

exports.deleteData = async (req, res) => {
    
    try {

      await CsvData.findByIdAndDelete(req.params.id)
       
        res.json({msg: 'data deleted Successfully'})

    } catch (err) {
        console.log(err)
    }

}