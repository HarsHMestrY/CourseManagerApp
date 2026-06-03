const express = require('express');

const {getCourses, getCourse, addCourse, updateCourse, deleteCourse } = require('../controllers/CourseController');

const router = express.Router();

router.get('/', getCourses);
router.get('/:id', getCourse);
router.post('/add', addCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);


module.exports = router;