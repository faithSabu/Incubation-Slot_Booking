var express = require('express');
const userHelper = require('../helpers/userHelper');
const adminHelper = require('../helpers/adminHelper');
const { response } = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
});

router.get('/applicationData',(req,res)=>{
  adminHelper.getApplicationData().then((data)=>{
    res.json(data)
  })
})

router.post('/singleApplicationData',(req,res)=>{
  adminHelper.getSingleApplicationData(req.body.applId).then((data)=>{
    res.json(data)
  })
})

router.post('/updateViewStatus',(req,res)=>{
  adminHelper.updateViewStatus(req.body.applId).then((response)=>{
    res.json(response)
  })
})

router.post('/approvalStatus',(req,res)=>{
  adminHelper.approvalStatus(req.body).then((response)=>{
    res.json(response)
  })
})
router.get('/mf',(req,res)=>{
  adminHelper.makeFalse();
})

router.post('/slotCreation',(req,res)=>{
  if(req.body.room>2 || req.body.slotNo>15){
    
  }
  adminHelper.createSlot(req.body).then(()=>{
    res.json();
  })
})

router.get('/getSlotData',(req,res)=>{
  adminHelper.getSlotData().then((data)=>{
    res.json(data);
  })
})

router.get('/approvedList',(req,res)=>{
  adminHelper.getApprovedList().then((data)=>{
    res.json(data);
  })
})

router.get('/slotAssign',(req,res)=>{
  adminHelper.assignSlotToCompany(req.query).then((response)=>{
    res.json(response)
  })
})

router.get('/getAssignedSlotData',(req,res)=>{
  adminHelper.getAssignedSlotData(req.query).then((response)=>{
    res.json(response)
  })
})





module.exports = router;
