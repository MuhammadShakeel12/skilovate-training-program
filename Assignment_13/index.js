const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const PORT = 3001;

app.use(express.json())

app.get('/' , (req , res) => {
    res.status(200).setHeader('Content-Type' , 'text/html').send(
        '<h1>Welcome to skilovate</h1>'
    )
})

app.get('/contact' ,(req, res) => {
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
})

app.get('/training' , (req,res) => {
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
})

app.post('/enrollnow' , (req,res) => {
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
})

app.use((req,res) => {
    res.status(404).setHeader('Content-Type', 'text/plain').send('Page not found')
})



app.listen(PORT , () => {
    console.log(`server running at port ${PORT}`)
})