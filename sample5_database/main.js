const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://yagijin:' + process.env.MongoDBUserPass + '@localhost:27017/db?authSource=admin';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    console.log("### Now Connecting With MongoDB ###");

    //ShowDataFromDatabase(err,client);
    //DeleteOneObject(err,client);

    ShowDataFromDatabase(err,client);

    assert.equal(null, err);
    client.close();
    console.log("### Connection was Closed ###");
});


//########################################################################################################

function DeleteOneObject (err, client) {
    const db = client.db("test");

    db.collection('inventory').deleteOne({ 
        status: "D" 
      })
      .then(function(result) {
        // process result
      })
}
function DeleteManyObject (err, client) {
    const db = client.db("test");

    db.collection('inventory').deleteMany({ 
        status: "A" 
      })
      .then(function(result) {
        // process result
      })
}

function UpdateManyData (err, client) {
    const db = client.db("test");

    db.collection('inventory').updateMany(
        { qty: { $lt: 50 } },
        { $set: { "size.uom": "in", status: "P" },
          $currentDate: { lastModified: true } })
      .then(function(result) {
        // process result
      })
}

function UpdateOneData (err,client) {
    const db = client.db("test");

    db.collection('inventory').updateOne(
        { item: "paper" },
        { $set: { "size.uom": "cm", status: "P" },
          $currentDate: { lastModified: true } })
      .then(function(result) {
        // process result
      })    
}

function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
 }
 
 function errorFunc(error) {
    console.log(error);
 }


function ShowDataFromDatabase (err,client) {
    const db = client.db("test");
    var cursor = db.collection('inventory').find({});

    cursor.forEach(iterateFunc, errorFunc);
}

function InsertToDatabaseMany (err, client) {
    const db = client.db("test");

    db.collection('inventory').insertMany([
        { item: "journal",
          qty: 25,
          size: { h: 14, w: 21, uom: "cm" },
          status: "A"},
        { item: "notebook",
          qty: 50,
          size: { h: 8.5, w: 11, uom: "in" },
          status: "A"},
        { item: "paper",
          qty: 100,
          size: { h: 8.5, w: 11, uom: "in" },
          status: "D"},
        { item: "planner",
          qty: 75, size: { h: 22.85, w: 30, uom: "cm" },
          status: "D"},
        { item: "postcard",
          qty: 45,
          size: { h: 10, w: 15.25, uom: "cm" },
          status: "A"}
      ])
      .then(function(result) {
        // process result
      })
}

function InsertToDatabase (err,client) {
    const db = client.db("test");

    db.collection('inventory').insertOne({
        item: "canvas",
        qty: 100,
        tags: ["cotton"],
        size: { h: 28, w: 35.5, uom: "cm" }
    })
    .then(function(result) {
        // process result
    })
}
