const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/courses', courseController.getAllCourses);
router.get('/courses/category/:category', courseController.getCoursesByCategory);

module.exports = router;