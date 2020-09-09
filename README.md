# learning-management-system
A learning management system

## Setup
1. Git clone project
2. Create `.env` files at the root folder. And paste the code below inside
```javascript
NODE_ENV=development
PORT=3000
```
3. Create database name `lms`
4. Update [settings.json](https://github.com/iqbalbaharum/learning-management-system/blob/master/settings.js)
```javscript
development: {
      db: {
        dialect: "mysql",
        host: 'localhost',
        username: <YOUR_USERNAME>,
        password: <YOUR_PASSWORD>,
        port: 3306,
        database: 'lms'
      }
    },
    production: {
      db: {
        dialect: "mysql",
        host: 'localhost',
        username: <YOUR_USERNAME>,
        password: <YOUR_PASSWORD>,
        port: 3306,
        database: 'lms'
      }
    }
```

## Run
```javascript
npm run watch:dev
```
