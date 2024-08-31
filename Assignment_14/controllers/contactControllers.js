const path = require('path')
const fs = require('fs')
const contact = (req, res) => {
    const pathurl = path.join(__dirname , 'contact.html')
    fs.readFile(pathurl , (err , data) => {
        if(err){
            res.status(404);
            res.setHeader('Content-Type' , 'text/html')
            res.send('<h1>File not Found</h1>')
        }else{
            res.status(200)
            res.setHeader('Content-Type' , 'text/html')
            res.send(data)
        }
    })
}

const postRequest = (req,res) => {
    const {name,age,gender,trainingProgram} = req.body;

    let missingFields = [];

    // Check for missing fields
    if (!name) missingFields.push('name');
    if (!age) missingFields.push('age');
    if (!gender) missingFields.push('gender');
    if (!trainingProgram) missingFields.push('trainingProgram');

    if(missingFields.length > 0){
        res.status(400)
        res.send({
            success: false,
            message: `Missing field : ${missingFields.join(',')}`
        })
    }else{
        res.status(200)
        res.send({name,age,gender,trainingProgram} )
    }
}

module.exports = {contact , postRequest}