require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

const postRouter = require("./routes/postRoutes")
const commentRouter = require("./routes/commentRoutes")

// Set up mongoose connection.
const mongoDB = process.env.MONGODB_URI
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use("/posts/", postRouter)
app.use("/comments/", commentRouter)

app.listen(3000, () => console.log("server started on port 3000"))
