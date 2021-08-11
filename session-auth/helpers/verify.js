function vu(req, res, next) {
  if(!req.session.online){
    return res.status(401).send('please log in')
  }
  next()
}

module.exports = vu