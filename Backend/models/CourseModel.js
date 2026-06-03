const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({

    courseName: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    level: {
        type: String,
        required: true
    },

    thumbnail: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Course', CourseSchema);