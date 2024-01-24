import React, { useState, useEffect } from "react";

const Fetch = ({ muscleGroup }) => {
  const [exercises, setExercises] = useState([]);
  const url="https://api.api-ninjas.com/v1/exercises?muscle=" + muscleGroup;
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return Object.values(res.json());
      })
      .then((data)=>{
        setExercises(data);
      })
      
  }, [url]);
  return (
    <div>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <p>Name: {exercise.name}</p>
          <p>Type: {exercise.type}</p>
          <p>Muscle: {exercise.muscle}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Fetch;
