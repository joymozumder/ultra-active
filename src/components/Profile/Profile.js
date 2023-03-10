import React, { useEffect, useState } from 'react';
import './Profile.css';
import img from '../../images/45297900.jpg'
import { addToDb } from '../../utilities/fakedb';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({list, breakTime, handleBreakTime}) => {

    

    let totalExerciseTime = 0;
    for(const exercise of list){
        totalExerciseTime = totalExerciseTime + exercise.timeRequired;
    }
    
    const notify = () => toast("Congratulations! You have completed your activity.");
    
    
    return (
      <div className="p-3 profile pb-5">
        <div className="d-flex  align-items-center ">
          <img
            src={img}
            alt=""
            className="rounded-circle img-fluid"
            id="profile-picture"
          ></img>
          <div className="ms-3">
            <h5 className='fw-bold'>Joy Mozumder</h5>
            <p className="mb-0">Chattogram</p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around align-items-center bg-white mt-3 py-3 rounded">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h4>
              <strong>67</strong>
              <sub>kg</sub>{" "}
            </h4>
            <p className="m-0">Weight</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h4>
              <strong>5.5</strong>
            </h4>
            <p className="m-0">Height</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h4>
              <strong>25</strong>
              <sub>yrs</sub>
            </h4>
            <p className="m-0">Age</p>
          </div>
        </div>

        <div className="mt-4">
          <h5 className="mb-2">Add A Break</h5>
          <div className="bg-white d-flex flex-wrap p-3 justify-content-around rounded">
            <button onClick={()=>handleBreakTime(10)} className="btn rounded-circle bg-secondary text-white p-2">
              10s
            </button>
            <button onClick={()=>handleBreakTime(20)} className="btn rounded-circle bg-secondary text-white p-2">
              20s
            </button>
            <button onClick={()=>handleBreakTime(30)} className="btn rounded-circle bg-secondary text-white p-2">
              30s
            </button>
            <button onClick={()=>handleBreakTime(40)} className="btn rounded-circle bg-secondary text-white p-2">
              40s
            </button>
            <button onClick={()=>handleBreakTime(50)} className="btn rounded-circle bg-secondary text-white p-2">
              50s
            </button>
          </div>
        </div>

        <div className="mt-3">
          <h5 className="mb-2">Exercise Details</h5>
          <div className="d-flex justify-content-between p-3 bg-white rounded mb-2">
            <p className="m-0">Exercise Time</p>
            <p className="m-0">{totalExerciseTime} seconds </p>
          </div>
          <div className="d-flex justify-content-between p-3 bg-white rounded mb-5">
            <p className="m-0">Break Time</p>
            <p className="m-0">{breakTime} seconds</p>
          </div>
        </div>

        <div>
          <button className="btn btn-primary w-100" onClick={notify}>Activity Completed</button>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Profile;