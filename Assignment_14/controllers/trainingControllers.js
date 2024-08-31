const path = require('path')
const fs = require('fs')

const training = (req,res) => {
    const filePath = path.join(__dirname, 'training.html')
    fs.readFile(filePath, (err , data) => {
        if(err){
            res.status(404);
            res.setHeader('Content-Type' , 'text/plain')
            res.send('File not found')
        }
        else{
            res.status(200)
            res.setHeader('Content-Type' , 'text/html')
            res.send(data)
        }
    })
}

module.exports = training