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

exports.delete_post = async (req, res, next) => {
  const postId = req.params.postId
  try {
    const result = await Post.findByIdAndDelete(postId)
    if (!result) {
      return res.status(404).json({ message: "Post not found" })
    }
    res.status(200).json({ message: "Post deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error })
  }
}

exports.toggle_publish = async (req, res, next) => {
  const postId = req.params.postId
  try {
    const result = await Post.updateOne({ _id: postId }, [
      { $set: { isPublished: { $eq: [false, "$isPublished"] } } },
    ])
    res.status(200).json({ message: "Publish status successfully changed" })
  } catch (error) {
    res.status(500).json({ message: "Error changing published status", error })
  }
}
