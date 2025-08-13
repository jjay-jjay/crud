//Step1
const express = require('express')
const app = express()
const morgen = require('morgan')
const bodyPerser = require('body-parser')
const cors = require('cors')


const { readdirSync } = require('fs')

//Step 4 middleware
app.use(morgen('dev'))
app.use(bodyPerser.json())
app.use (cors())



readdirSync('./Routes')
.map((c)=> app.use ('/api', require('./Routes/'+c)))



//Step 2 Start Server
app.listen(5000,()=>
     console.log('Server is Runing on prot 5000'))