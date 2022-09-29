import React from 'react';

const Exercise = ({ exercise, handleAddToList }) => {
    const { id, name, timeRequired, img } = exercise;
    return (
        <div className="col">
        <div className="card h-100">
            <img src={img} className="card-img-top p-2 rounded-4" alt=""></img>
            <div className="card-body pb-0 pt-2">
                <h4 className="card-title fw-medium">{name}</h4>
                <p className="time-required">Time Required: {timeRequired}s</p>
            </div>
            <div className="card-footer border-0 bg-white mb-2">
                <button className="w-100 btn btn-primary" onClick={()=>{
                    handleAddToList(exercise);
                }}>Add to list</button>
            </div>
        </div>
        </div>
    );
};

export default Exercise;