const mongodb = require('mongodb')
const MongoClient 
let _db ;
const initDb = callback => {
    if(_db){
        console.log('Database is already installed')
        return callback(null,_db)
    }
}