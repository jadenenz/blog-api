const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define the post schema
const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

// Sets the createdAt parameter equal to the current time
postSchema.pre("save", (next) => {
  now = new Date()
  if (!this.createdAt) {
    this.createdAt = now
  }

  next()
})

// Export model
module.exports = mongoose.model("Post", postSchema)
