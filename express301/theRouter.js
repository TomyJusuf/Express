const express = require('express')
let router = express.Router()

// router.use work the same that app.use does. but it'!s specific to This router

// insteeed of:
// app.get('/', (req, res) => {})
// we do:
// router.get('/', (req, res) => {})

router.get('/', (req, res, next) => {
  res.json({ msg: 'Router works!' })
  next()
})

// router.all;
// router.post;
// router.put;
// router.delete;

module.exports = router
