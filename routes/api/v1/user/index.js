var express = require('express')
var router = express.Router()
var mysqlconn = require('../../../../database/mysql');

router.route('/')
  .get(getRouteHandler)
  .post(postRouteHandler)

function getRouteHandler(req, res) {



  mysqlconn.query('SELECT * FROM users', function (error, results, fields) {
    if (error) return res.status(500).json({ message: 'Error' })
    var mysqlRes = results.map((mysqlObj, index) => {
      return Object.assign({}, mysqlObj);
    })
    res.status(200).json({ message: 'Ok', data: mysqlRes })
  })
  // console.log(mysqlRes)

}

function postRouteHandler(req, res) {
  const payload = req.body
  var sql = 'INSERT INTO users SET ?'
  var params = { name: payload.name }
  mysqlconn.query(sql, params, function (error, results, fields) {
    if (error) return res.status(500).json({message: 'Error inserting data'})
    res.status(201).json({ message: 'User Created' })
  })
}

module.exports = router;
