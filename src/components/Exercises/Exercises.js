import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'
const Exercises = ({handleAddToList}) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
      fetch("exercises.json")
        .then((res) => res.json())
        .then((data) => setExercises(data));
    }, []);

    return (
      <div className="exercises col-md-9">
        <h1 className="mb-3">Absolute Fitness</h1>
        <h5 className="mb-3">Select today’s exercise</h5>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                exercises.map(exercise => <Exercise key={exercise.id} exercise={ exercise } handleAddToList={handleAddToList}></Exercise>)
            }
        </div>
      </div>
    );
};

export default Exercises;