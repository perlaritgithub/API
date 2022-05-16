var express = require('express');
router = express.Router();
var sampleRoutes = require('../controllers/mainCtrl');

//first  start
//first post
router.post('/postdata', sampleRoutes.postdataCtrl);
router.post('/postsubcate', sampleRoutes.postsubcateCtrl);
router.get('/getsubcate', sampleRoutes.getsubcateCtrl);

router.post('/additemdate', sampleRoutes.additemdateCtrl);
router.get('/getItem', sampleRoutes.getItemDataCtrl);
// router.get('/getreportdata', sampleRoutes.getdesignationCtrl);
//first get
router.get('/getsubmitdata', sampleRoutes.getsubmitdataCtrl);

//second post
router.post('/post1data', sampleRoutes.post1dataCtrl);
// router.get('/getreportdata', sampleRoutes.getdesignationCtrl);
//second get
router.get('/get1submitdata', sampleRoutes.get1submitdataCtrl);


//third
router.post('/post2data', sampleRoutes.post2dataCtrl);
// router.get('/getreportdata', sampleRoutes.getdesignationCtrl);
//second get
router.get('/get2submitdata', sampleRoutes.get2submitdataCtrl);


///fourth
router.post('/post2data', sampleRoutes.post2dataCtrl);
// router.get('/getreportdata', sampleRoutes.getdesignationCtrl);
//second get
router.get('/get2submitdata', sampleRoutes.get2submitdataCtrl);




//first  End



module.exports = router;
