const express = require('express')
const app = express()
const homeRoute = require('./routes/home')
const contactRoute = require('./routes/contact')
const trainingRoute = require('./routes/training')


const PORT = 3001;

app.use(express.json())

app.use('/' , homeRoute)
app.use('/' ,contactRoute)

app.use('/' , trainingRoute)

app.use((req,res) => {
    res.status(404).setHeader('Content-Type', 'text/plain').send('Page not found')
})



app.listen(PORT , () => {
    console.log(`server running at port ${PORT}`)
})