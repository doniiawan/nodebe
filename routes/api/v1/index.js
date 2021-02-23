var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  try {
    let authorizationHeader = (req.headers['x-api-key'] || req.headers['x-api-key'])
    if (authorizationHeader === undefined || authorizationHeader === null || authorizationHeader === '' || authorizationHeader !== process.env.SECRET) {
      return res.status(401).json({ code: 401, message: 'Unauthorized!' })
    }
    console.log(authorizationHeader)

    // let [, token] = authorizationHeader.split(' ')
    // if (!token) {
    //   return res.status(401).json({ code: 401, message: 'Unauthorized!' })
    // } else {
    //   var decodedJwt = jsonwebtoken.verify(token, secret, function (err, decoded) {
    //     if (err) {
    //       return res.status(401).json({ code: 401, message: 'Expired or invalid token!' })
    //     } else {
    //       return decoded
    //     }
    //   });
    //   if (!decodedJwt) {
    //     return res.status(401).json({ code: 401, message: 'Expired or invalid token!' })
    //   }
    //   res.locals.authuser = decodedJwt
        return next()
    // }
  } catch (err) {
    // console.log(err)
  }
})

router.use('/user', require('./user'));

module.exports = router;
