const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://yagijin:' + process.env.MongoDBUserPass + '@localhost:27017/db?authSource=admin';

console.log(url);

function resolveData (data) {
    return new Promise(resolve => {
        // Use connect method to connect to the Server
        MongoClient.connect(url, function(err, client) {
            console.log("### Now Connecting With MongoDB ###");

            data = ShowDataFromDatabase(err,client);
            assert.equal(null, err);
            client.close();
            
            console.log("### Connection was Closed ###");
            resolve(data);
        });
    });
}

export default async function getAllObject() {
    let data = [{ "message" : "Error" }, {"name" : "jin"}];

    try {
        data = await resolveData(data);
    } catch (e) {
        console.log(e);
    }

    console.log(data)
    return data;
}

function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
 }
 
 function errorFunc(error) {
    console.log(error);
 }


function ShowDataFromDatabase (err,client) {
    const db = client.db("test");
    var cursor = db.collection('inventory').find({}).toArray();
    //cursor.forEach(iterateFunc, errorFunc);
    return cursor;
}
