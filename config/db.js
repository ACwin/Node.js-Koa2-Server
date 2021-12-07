const env = process.env.NODE_ENV

// 配置
let MYSQL_CONF = {}
let REDIS_CONF = {}

if(env==='dev') {
  // mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog'
  }

  // redis
  REDIS_CONF = {
    host: '127.0.0.1',
    port: '6379',
    password: '123456'
  }
}


if(env==='production') {
  // mysql
  // redis
}


module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}