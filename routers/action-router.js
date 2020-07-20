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

router.post('/', validateActionBody(), async (req, res, next) => {
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

router.put('/:id', validateActionBody(), async (req, res, next) => {
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

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletePost = await Action.remove(id)
    res.status(200).json({ data: deletePost })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

function validateActionBody() {
  return (req, res, next) => {
    try {
      if (!req.body.description) {
        res.status(400).json({ message: "Please fill out the required fields" })
      } else {
        body = req.body
        next()
      }
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

module.exports = router