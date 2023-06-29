module.exports = {
  port: process.env.PORT || 2020,
  mongoUrl:'mongodb+srv://verselon2000:W4iqNZvQcMrmNi31@cluster0.6j4igyn.mongodb.net/AirFlight?retryWrites=true&w=majority',
  jwtSecret: process.env.JWTSECRET || "placeholder",
  refreshSecret: process.env.REFRESHSECRET || "refreshholder",
  tokenLife: process.env.TOKENLIFE || 300,
  refreshLife: process.env.REFRESHLIFE || 86400,
  permission: {
    NORMAL_USER: 1,
    ADMIN: 2047,
  },
  permissionLevel: {
    NORMAL_USER: 1,
    ADMIN: 1024,
  },
  corsOrigin: "http://localhost:2020",
  email: {
    account: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASS,
  },
};
