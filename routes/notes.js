const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj = {
        a:'thanos',
        number:50
    }
res.json(obj)
})
module.exports = router