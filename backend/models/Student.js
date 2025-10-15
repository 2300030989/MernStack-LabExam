const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String,
}, { collection: 'testCollection' }); // Changed to 'testCollection' for testing

module.exports = mongoose.model('Student', studentSchema);
