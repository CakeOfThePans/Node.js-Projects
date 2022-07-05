const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({ //structure of a student
    name: {
        type: String,
        required: true
    },
    GPA: {
        type: Number,
        required: true
    },
    Graduated: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema)