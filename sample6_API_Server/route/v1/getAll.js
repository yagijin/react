import express from 'express';
import getAllObject from '../../components/databaseGetAll.js';

const router = express.Router();

function asyncResponse () {
    return new Promise(resolve => {
        var data = getAllObject();
        resolve(data);
    });
}

router.get('/',async function(req,res){
    var dataobj = await asyncResponse(); //データが来るのを待つ
    res.json(dataobj);
});

export default router;