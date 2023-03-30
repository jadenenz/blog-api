const express = require("express")
const router = express.Router()

// Import controller module
const comment_controller = require("../controllers/commentController")

// Delete comment given a comment id.
router.delete("/:commentId", comment_controller.delete_comment)

// Export router
module.exports = router
