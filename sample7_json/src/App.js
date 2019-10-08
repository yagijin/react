import React, {useState} from 'react';
import './App.css';

function ShowList (prop) {
  var productsList = prop.data.map(function(products) {
    return (
      <p name={products.item} key={products._id}>
        {(products.item === "canvas") && (products._id + " ： " + products.item)}
        {!(products.item === "canvas") &&  ("")}
      </p>
    );
  });
  return (<div>
            {productsList}
        </div>
  );
}

function App() {

  const [data, setData] = useState([{}]);
  let products = [
    {
        "_id": "5d92c7dd193afc3db8bb77ff",
        "item": "canvas",
        "qty": 100,
        "tags": [
            "cotton"
        ],
        "size": {
            "h": 28,
            "w": 35.5,
            "uom": "in"
        },
        "lastModified": "2019-10-01T06:36:55.242Z",
        "status": "P"
    },
    {
        "_id": "5d92c8121bd23d27ec43a996",
        "item": "canvas",
        "qty": 100,
        "tags": [
            "cotton"
        ],
        "size": {
            "h": 28,
            "w": 35.5,
            "uom": "in"
        },
        "lastModified": "2019-10-01T06:36:55.242Z",
        "status": "P"
    },
    {
        "_id": "5d92e0e261b75c19b0412923",
        "item": "journal",
        "qty": 25,
        "size": {
            "h": 14,
            "w": 21,
            "uom": "in"
        },
        "status": "P",
        "lastModified": "2019-10-01T06:25:40.374Z"
    },
    {
        "_id": "5d92e0e261b75c19b0412924",
        "item": "notebook",
        "qty": 50,
        "size": {
            "h": 8.5,
            "w": 11,
            "uom": "in"
        },
        "status": "A"
    },
    {
        "_id": "5d92e0e261b75c19b0412925",
        "item": "paper",
        "qty": 100,
        "size": {
            "h": 8.5,
            "w": 11,
            "uom": "cm"
        },
        "status": "P",
        "lastModified": "2019-10-01T06:19:33.159Z"
    },
    {
        "_id": "5d92e0e261b75c19b0412927",
        "item": "postcard",
        "qty": 45,
        "size": {
            "h": 10,
            "w": 15.25,
            "uom": "in"
        },
        "status": "P",
        "lastModified": "2019-10-01T06:25:40.374Z"
    }
];

return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setData(products)}>ボタン</button>
        <ShowList data={data}/>
      </header>
    </div>
  );
}

export default App;
