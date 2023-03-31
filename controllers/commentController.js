const Comment = require("../models/comment")
const Post = require("../models/post")

exports.get_comments = async (req, res, next) => {
  const postId = req.params.postId
  try {
    const foundComments = await Comment.find({ post: req.params.postId }).sort([
      ["createdAt", "ascending"],
    ])
    res.json(foundComments)
  } catch (e) {
    res.send(e)
  }
}

exports.post_comment = async (req, res, next) => {
  const postId = req.params.postId
  try {
    const newComment = await new Comment({
      post: postId,
      author: req.body.author === "" ? "Anonymous" : req.body.author,
      content: req.body.content,
      createdAt: new Date(),
    }).save()
    res.status(200).json({ message: "resource successfully created" })
  } catch (error) {
    res.status(500).json({ message: "Error posting comment", error })
  }
}

exports.delete_comment = async (req, res, next) => {
  const commentId = req.params.commentId
  try {
    const result = await Comment.findByIdAndDelete(commentId)
    if (!result) {
      return res.status(404).json({ message: "Comment not found" })
    }
    res.status(200).json({ message: "Comment deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error })
  }
}
