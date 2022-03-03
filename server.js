require("dotenv").config()

const express = require("express")
const app = express()

const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

//Connection Setup with MongoDB
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

app.use(express.json())

const subscribersRouter = require("./routes/subscribers")
app.use("/subscribers", subscribersRouter)

//Port Setup
app.listen(3000, () => console.log("Port is Listening"))