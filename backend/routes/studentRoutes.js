const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// POST /students - create a student
router.post('/', async (req, res) => {
    const { name, email, course } = req.body;
    try {
        const newStudent = new Student({ name, email, course });
        await newStudent.save();
        res.status(201).json({ message: 'Student created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create student' });
    }
});

module.exports = router;
