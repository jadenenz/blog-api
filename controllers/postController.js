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
  console.log(req.body)
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      createdAt: new Date(),
    }).save()
    res.send("Resource successfully created")
  } catch (e) {
    res.send(e)
  }
}
