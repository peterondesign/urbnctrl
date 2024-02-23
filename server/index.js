const express = require("express")
const app =express()
const dontenv= require("dotenv").config()
const {errorHandler} = require("./middlewares/errorhandler")
const db = require("./models")
const blogs = require("./blogs/blog")


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/api", blogs)

app.use(errorHandler)

db.sequelize.sync().then(()=>{
    app.listen(5000, ()=>{
        console.log(`server listening on port 5000`)
    })
})
