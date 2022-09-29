import React, { useEffect, useState } from 'react';
import { addToDb, getStoredBreakTime } from '../../utilities/fakedb';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import './Club.css';

const Club = () => {
    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([]);
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
      fetch("exercises.json")
        .then((res) => res.json())
        .then((data) => setExercises(data));
    }, []);

    const handleAddToList = (exercise) => {
      console.log(exercise);
      const newList = [...list, exercise];
      setList(newList);
    };

    const handleBreakTime = (time) => {
      setBreakTime(time);
      addToDb(time);
    };

    useEffect(() => {
      const breakTime = getStoredBreakTime();
      setBreakTime(breakTime);
    }, [exercises]);
    return (
      <div className="row">
        <div className="exercises-container col-12 col-md-9">
          <h1 className="mb-3">Absolute Fitness</h1>
          <h5 className="mb-3">Select today’s exercise</h5>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {exercises.map((exercise) => (
              <Exercise
                key={exercise.id}
                exercise={exercise}
                handleAddToList={handleAddToList}
              ></Exercise>
            ))}
          </div>
        </div>
        <div className="profile-container col-12 col-md-3">
          <Profile
            list={list}
            breakTime={breakTime}
            handleBreakTime={handleBreakTime}
          ></Profile>
        </div>
      </div>
    );
};

export default Club;