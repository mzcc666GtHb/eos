// 后台配置文件
module.exports = {
  // 数据库配置
  mysqlDB: {
    host: 'localhost',
    user: 'root',
    password: 'rooT@679679',
    database: 'scscmsdb'
  },
  upPath: 'dist/upFile/', // 上传路径
  // token 配置
  JWTs: {
    secret: 'scscms', // 指定密钥
    expiresIn: '2h' // 超时设置 m分钟 h小时 d天数
  },
  // 邮件服务配置
  emailServer: {
    host: 'smtp.163.com',
    port: 465,
    user: '15000831318@163.com',
    password: 'LYNXJKQAXRRVVVDR',
    ssl: true
  },
  // 公用：获取客户端IP
  getClientIP: function (ctx) {
    let req = ctx.request
    let ip = ctx.ip ||
      req.headers['x-forwarded-for'] ||
      req.ip ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress || ''
    let arr = ip.match(/(\d{1,3}\.){3}\d{1,3}/)
    return arr ? arr[0] : ''
  }
}
