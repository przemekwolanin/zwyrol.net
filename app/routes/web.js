const express = require('express');
const router = new express.Router();
const HomeController = require('../controllers/home-controller');
const PagesController = require('../controllers/pages-controller');
const AddController = require('../controllers/add-controller');

router.get('/',HomeController.getJokes);
router.get('/zwyrol/:name',HomeController.getJoke);
router.get('/tag/:name',HomeController.getJokes);
router.get('/random',HomeController.getRandom);
router.get('/about',PagesController.getAbout);
router.get('/add',AddController.getAddForm);
router.post('/add',AddController.getAddAction);


module.exports = router;