import React, { useState } from 'react';
import axios from 'axios';


const StudentForm = () => {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        course: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/students', student);
            setStudent({ name: '', email: '', course: '' });
            setSubmitted(true);
        } catch (error) {
            alert('Failed to save student');
        }
    };

    const handleBack = () => {
        setSubmitted(false);
    };

    return (
        <div style={styles.container}>
            {!submitted ? (
                <>
                    <h2>Student Registration Form</h2>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={student.name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={student.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                        <input
                            type="text"
                            name="course"
                            placeholder="Course"
                            value={student.course}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                        <button type="submit" style={styles.button}>Submit</button>
                    </form>
                </>
            ) : (
                <div style={styles.thankYouBox}>
                    <h2>Thank you for filling this form!</h2>
                    <button onClick={handleBack} style={styles.button}>Back</button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    form: {
        display: 'inline-block',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    },
    input: {
        display: 'block',
        margin: '10px auto',
        padding: '10px',
        width: '250px',
        fontSize: '1rem'
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    thankYouBox: {
        display: 'inline-block',
        padding: '40px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#e6ffe6',
        marginTop: '40px'
    }
};

export default StudentForm;
