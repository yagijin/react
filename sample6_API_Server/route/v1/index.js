import express from 'express';
import getAll from './getAll.js'
import setData from './setData.js'

const router = express.Router();

router.use('/getAll', getAll);
router.use('/setData', setData);

export default router;