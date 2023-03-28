const Post = require("../models/post")

exports.get_posts = async (req, res, next) => {
  try {
    const posts = await Post.find({})
    res.json(posts)
  } catch (e) {
    console.log(e)
  }
}

exports.post_create_post = async (req, res, next) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      createdAt: new Date(),
    }).save()
    res.status(201).json({ message: "Resource successfully created" })
  } catch (error) {
    res.json({ message: error })
  }
}

exports.get_specific_post = async (req, res, next) => {
  try {
    const foundPost = await Post.findById(req.params.postId)
    res.json(foundPost)
  } catch (e) {
    res.send(e)
  }
}
