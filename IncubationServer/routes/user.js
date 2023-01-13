var express = require('express');
const userHelper = require('../helpers/userHelper');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', (req, res) => {
  try {
    userHelper.doSignup(req.body).then((response) => {
      res.json({ response })
    })
  } catch (error) {
    console.log(error);
  }
})

router.post('/login', (req, res) => {
  try {
    userHelper.doLogin(req.body).then((response) => {
      res.json(response)
    })
  } catch (error) {
    console.log(error);
  }
})

router.post('/applicationForm', (req, res) => {
  try {
    userHelper.submitApplication(req.body).then((response) => {
      res.json(response)
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
