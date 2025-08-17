const express=require('express');
const router =express.Router();

const aicontroller=require('../controllers/ai.controller');
// router.get('get-resp')


// router.get("/get-response",aicontroller.getResponse);
// router.post("/get-response",aicontroller.getResponse);
router.post("/get-review",aicontroller.getReview);


module.exports=router;