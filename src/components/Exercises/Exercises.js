import React, { useEffect, useState } from 'react';
import './Exercises.css'
const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
      fetch("exercises.json")
        .then((res) => res.json())
        .then((data) => setExercises(data));
    }, []);

    return (
      <div className="exercises">
        <h1 className="mb-3">Absolute Fitness</h1>
        <h5 className="mb-3">Select today’s exercise</h5>
        <div>
            <p>{exercises.length}</p>
        </div>
      </div>
    );
};

export default Exercises;