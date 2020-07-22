const router = require('express').Router()
const Project = require('../data/helpers/projectModel')
const { validateProjectBody } = require('../middlewares')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.get()
    res.status(200).json({ data: projects })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const project = await Project.get(id)
    res.status(200).json({ data: project })
  } catch (error) {
    next(error)
  }
})

router.post('/', validateProjectBody(), async (req, res, next) => {
  try {
    const newPost = await Project.insert(body)
    res.status(201).json({ data: newPost })
  } catch (error) {
    next(error)
  }
})

router.put('/:id', validateProjectBody(), async (req, res, next) => {
  try {
    const { id } = req.params
    const editPost = await Project.update(id, body)
    res.status(201).json({ data: editPost })
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletePost = await Project.remove(id)
    res.status(200).json({ message: `${deletePost} project post removed` })
  } catch (error) {
    next(error)
  }
})


module.exports = router