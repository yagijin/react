// ライブラリ読み込み
import express from 'express';
import bodyParser from 'body-parser';
import router from './route/v1/';
//import router from './route/v1/'
//var router = require('./route/v1/');

const app = express();
const port = 3030;

//body-parserの設定
//まだよくわかっていない
//１つ目はPOSTのときのBodyの仕様
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/', router);

//サーバ開始
app.listen(port, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info('### Listen :' +  port);
    }
});
