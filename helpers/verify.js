const jwt = require('jsonwebtoken')


function vu(req, res, next) {
  console.log('token from middeware:',req.headers.authorization)

  jwt.verify(req.headers.authorization, 'BlahBlah777', (err, decoded)=>{
    if(err){return res.status(401).send(err)}

    req.user = decoded.username

    console.log('decoded.username:', decoded.username)

    next()

  })

  next()
}

module.exports = vu


// // check the token and add the user to req object.
// // if(!req.session.online){
//   return res.status(401).send('please log in')
// // }
// next()