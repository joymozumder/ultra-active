import React from 'react';
import './Profile.css';
import img from '../../images/45297900.jpg'

const Profile = () => {
    return (
        <div className="col-md-3 p-4 justify-content-center profile">
            <div className='d-flex  align-items-center '>
                <img src={ img } alt="" className='rounded-circle img-fluid' id='profile-picture'></img>
                <div className='ms-3'>
                    <h5>Joy Mozumder</h5>
                    <p className='mb-0'>Chattogram</p>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-around align-items-center bg-white mt-3 py-3 rounded'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h4><strong>75</strong><sub>kg</sub> </h4>
                    <p className='m-0'>Weight</p>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h4><strong>6.5</strong></h4>
                    <p className='m-0'>Height</p>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h4><strong>25</strong><sub>yrs</sub></h4>
                    <p className='m-0'>Age</p>
                </div>
                
            </div>

        </div>
    );
};

export default Profile;