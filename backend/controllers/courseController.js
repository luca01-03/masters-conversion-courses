const Course = require('../models/course');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCoursesByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const courses = await Course.findAll({ where: { category } });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};