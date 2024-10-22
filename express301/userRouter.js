const express = require('express')
const router = express.Router()

function validateUser(req, res, next) {
  res.locals.validated = true
  console.log('Validated')
  next()
}

// validateUser, is middleware that will ONLY be added to this router.
// In other words, it will NOT be added to any other router
router.use(validateUser)

router.get('/', (req, res) => {
  res.json({ msg: 'User Router works!' })
})

module.exports = router
