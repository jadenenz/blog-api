const express = require("express")
const router = express.Router()

// Import controller modules.
const post_controller = require("../controllers/postController")

router.get("/", post_controller.get_posts)

router.post("/", post_controller.post_create_post)

// Export router.
module.exports = router
