var MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
console.log('bước1')
var mongo = new MongoClient(process.env.connectionStr);
console.log('bước2')
console.log(process.env.connectionStr)

mongo.connect().then(() => {
    // Kết nối thành công, giờ đây bạn có thể truy cập database và collection
    const db = mongo.db(); // Lấy đối tượng database
    const collection = db.collection(process.env.USERTABLE); // Lấy đối tượng collection

    // Lấy bản ghi đầu tiên trong collection
    collection.find().toArray().then((document) => {
        console.log(document);
    });
});
console.log("Connect thành công")

