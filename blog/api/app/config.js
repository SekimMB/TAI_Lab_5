const config = {
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tai:TestTai0@ds261527.mlab.com:61527/tai',
  port: 3000,
  JwtSecret: process.env.JWT_SECRET || 'secret'

}
export default config
