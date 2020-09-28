require("dotenv").config({ silent: true });

module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",

    // Environment-dependent settings
    development: {
      db: {
        dialect: "mysql",
        host: 'localhost',
        username: 'root',
        password: 'root',
        port: 3306,
        database: 'lmsTEST'
      }
    },
    production: {
      db: {
        dialect: "mysql",
        host: 'localhost',
        username: 'root',
        password: 'root',
        port: 3306,
        database: 'lmsTEST'
      }
    }
  };
