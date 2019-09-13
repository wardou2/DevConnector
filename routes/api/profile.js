const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private
router.get('/', (req, res) => res.send('profile routes'))

module.exports = router