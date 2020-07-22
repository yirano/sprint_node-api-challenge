module.exports = {
  validateProjectBody: () => {
    return (req, res, next) => {
      try {
        if (!req.body.name || !req.body.description) {
          res.status(400).json({ message: "Please fill out the required fields." })
        } else {
          body = req.body
          next()
        }
      } catch (error) {
        next(error)
      }
    }
  },
  validateActionBody: function () {
    return (req, res, next) => {
      try {
        if (!req.body.description || !req.body.notes) {
          res.status(400).json({ message: "Please fill out the required fields" })
        } else {
          body = req.body
          next()
        }
      } catch (error) {
        next(error)
      }
    }
  }
}