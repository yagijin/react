## 設定方法  
以下のコマンドを実行するとデータベースサーバが起動する  
``` "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath "\data\db" --auth ```  
--dbpathを任意のデータベースに変更して使用する

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