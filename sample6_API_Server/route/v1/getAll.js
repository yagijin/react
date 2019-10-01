import express from 'express';

const router = express.Router();

router.get('/',function(req,res){
    res.json({
        message:"### This is test GET"
    });
});

export default router;