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
  // project_id, description, notes = required
  try {
    const { body } = req
    const newPost = await Action.insert(body)
    res.status(201).json({ data: newPost })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { body } = req
    const { id } = req.params
    const editPost = await Action.update(id, body)
    res.status(201).json({ data: editPost })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router