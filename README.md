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

## Installation
```javascript
npm ci
```

If you having problem with the above method, 

1. **Delete** `node_modules` folder
2. [package-lock.json](https://github.com/iqbalbaharum/learning-management-system/blob/master/package-lock.json)
3. Run command below
```javascript
npm install
```

## Run App
```javascript
npm run watch:dev
```
