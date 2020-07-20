const router = require('express').Router()
const Action = require('../data/helpers/actionModel')

router.get('/', async (req, res, next) => {
  try {
    const actions = await Action.get()
    res.status(200).json({ data: actions })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const action = await Action.get(id)
    res.status(200).json({ data: action })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post('/', async (req, res, next) => {

})

module.exports = router