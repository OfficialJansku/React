import React from 'react';
import './App.css';

const Course = (probs) => {
    let teacher = "Tiina Partanen";
    let coursename = "React";
    let classroom = "2074";

    return (
        <div className="coursedata">
        <p>Opettaja: {probs.teacher}</p>
        <p>Kurssi: {probs.coursename}</p>
        <p>Luokkatila: {probs.classroom}</p>
        </div>
    )
}

export default Course;