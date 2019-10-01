import express from 'express';

const router = express.Router();

router.post('/',function(req,res){
    console.log(req.body.message)
    res.json({ message: 'Your POST was successed' });
});

export default router;