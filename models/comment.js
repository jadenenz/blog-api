const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define schema
const commentSchema = new Schema({
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  author: { type: String, default: "Anonymous" },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

// Sets the createdAt parameter equal to the current time
commentSchema.pre("save", (next) => {
  now = new Date()
  if (!this.createdAt) {
    this.createdAt = now
  }

  next()
})

// Export model
module.exports = mongoose.model("Comments", commentSchema)
