const config = {
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://MarcinUser:qwer1234@cluster0-vd0a5.mongodb.net/test?retryWrites=true&w=majority',
  port: 3000,
  JwtSecret: process.env.JWT_SECRET || 'secret'

}
export default config
