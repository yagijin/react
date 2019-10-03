## 設定方法  
以下のコマンドを実行するとデータベースサーバが起動する  
``` "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath "\data\db" --auth ```  
--dbpathを任意のデータベースに変更して使用する  
データベースの作成などの操作は以下から行う  
``` "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"  --host <HOSTNAME> --port <PORT>```  
デフォルトではhostとportいらない  
``` use admin ```  
``` 
  db.createUser(
  {
    user: "superuser",
    pwd: "changeMeToAStrongPassword",
    roles: [ "root" ]
  }
)
```  
``` show users ```  
``` db.shutdownServer() ```
``` exit ```  

## データベースに対しての要素の追加  
単体のオブジェクトの追加  
```js
db.collection('inventory').insertOne({
        item: "canvas",
        qty: 100,
        tags: ["cotton"],
        size: { h: 28, w: 35.5, uom: "cm" }
    })
    .then(function(result) {
        // process result
    })
```
複数のオブジェクトの追加  
```js
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
```

## 検索方法
このオブジェクトをデータベースから検索したい場合  
```json
{ 
  _id: 5ade424c84c9ca2d56d31697,
  item: 'journal',
  qty: 25,
  size: { h: 14, w: 21, uom: 'cm' },
  status: 'A' 
}
```
完全一致の場合  
```js
var cursor = db.collection('inventory').find({ 
  size: { h: 14, w: 21, uom: "cm" }
});
```
部分一致の場合  
```js
var cursor = db.collection('inventory').find({ 
  "size.uom": "cm"
}); 
```
比較（暗黙のAND）（ststusがAかつqtyが30未満のもの）  
```js
var cursor = db.collection('inventory').find({ 
  status: "A", qty: { $lt: 30 }
});
```
比較（OR）（statusがAもしくはqtyが30未満のもの）  
```js
var cursor = db.collection('inventory').find({ 
  $or: [ {status: "A" }, { qty: { $lt: 30 } } ]
});
```
ANDとORをくっつけた場合  
```js
var cursor = db.collection('inventory').find({ 
  status: "A",
  $or: [ { qty: { $lt: 30 } }, { item: { $regex: "^p" } } ]
});
```

## データベースの要素の更新  
最初にヒットした一つの要素のみを更新  
```js
db.collection('inventory').updateOne(
        { item: "paper" },
        { $set: { "size.uom": "cm", status: "P" },
          $currentDate: { lastModified: true } })
      .then(function(result) {
        // process result
      })  
```
複数の要素の更新  
```js
db.collection('inventory').updateMany(
        { qty: { $lt: 50 } },
        { $set: { "size.uom": "in", status: "P" },
          $currentDate: { lastModified: true } })
      .then(function(result) {
        // process result
      })    
```

## データベースの要素の削除  
最初にヒットしたオブジェクトのみを削除  
```js
db.collection('inventory').deleteOne({ 
  status: "D" 
})
.then(function(result) {
  // process result
})
```
ヒットした要素すべてのオブジェクトを削除  
```js
db.collection('inventory').deleteMany({ 
  status: "A" 
})
.then(function(result) {
  // process result
})

```