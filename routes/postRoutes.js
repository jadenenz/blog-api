const express = require("express")
const router = express.Router()

// Import controller modules.
const post_controller = require("../controllers/postController")
const comment_controller = require("../controllers/commentController")

/// POST ROUTES ///

// Get all posts.
router.get("/", post_controller.get_posts)

// Create a new post.
router.post("/", post_controller.post_create_post)

// Get specific post.
router.get("/:postId/", post_controller.get_specific_post)

// Update isPublished boolean
router.patch("/:postId", post_controller.toggle_publish)

// Delete post given id
router.delete("/:postId", post_controller.delete_post)

/// COMMENT ROUTES ///

// Get all comments for the associated post.
router.get("/:postId/comments/", comment_controller.get_comments)

// Post new comment associated with post.
router.post("/:postId/comments/", comment_controller.post_comment)

// Export router.
module.exports = router
