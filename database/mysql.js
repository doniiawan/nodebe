var mysql = require('mysql')
var mysqlconn = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASS || 'root',
  database: process.env.MYSQL_DATABASE || 'nodebe'
})

mysqlconn.connect()

mysqlconn.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('SATU TAMBAH SATU YA: ', rows[0].solution)
})

// mysqlconn.end()

module.exports = mysqlconn
