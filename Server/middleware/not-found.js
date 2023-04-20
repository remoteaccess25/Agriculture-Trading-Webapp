const notFound = (req, res) => {
    req.status(404).json({msg:'Route does not exist'})
}

module.exports = notFound