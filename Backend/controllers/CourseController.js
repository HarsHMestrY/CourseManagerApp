const Course = require('../models/CourseModel');

const getCourses = async (req, res) => {

    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.json(course);
    } catch (err) {
        res.status(500).json(err);
    }
};

const addCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.json(course);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(course);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: "Course Deleted Successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
};


module.exports = {getCourses, getCourse, addCourse, updateCourse, deleteCourse };