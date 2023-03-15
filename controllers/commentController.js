const Comment = require("../models/comment")
const Post = require("../models/post")

exports.get_comments = async (req, res, next) => {
  const postId = req.params.postId
  try {
    const foundPosts = await Comment.find({ post: req.params.postId }).sort([
      ["createdAt", "ascending"],
    ])
    res.json(foundPosts)
  } catch (e) {
    res.send(e)
  }
}

exports.post_comment = async (req, res, next) => {
  const postId = req.params.postId
  try {
    const newComment = await new Comment({
      post: postId,
      author: req.body.author,
      content: req.body.content,
      createdAt: new Date(),
    }).save()
    res.send("resource successfully created")
  } catch (e) {
    res.send(e)
  }
}
