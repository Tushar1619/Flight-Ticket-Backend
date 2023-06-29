module.exports = {
  port:  3000,
  mongoUrl:'mongodb+srv://verselon2000:W4iqNZvQcMrmNi31@cluster0.6j4igyn.mongodb.net/AirFlight?retryWrites=true&w=majority',
  jwtSecret:  "placeholder",
  refreshSecret:"refreshholder",
  tokenLife:  300,
  refreshLife: 86400,
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
