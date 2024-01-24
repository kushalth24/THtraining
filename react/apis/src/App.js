import { useState } from "react";
import "./App.css";
import Fetch from "./components/Fetch";

function App() {
  const [muscle, selectMuscle] = useState("abdominals");
  const handleChange = (e) => {
    selectMuscle(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <select value={muscle} onChange={handleChange}>
          <option value="abdominals">abdominals</option>
          <option value="abductors">abductors</option>
          <option value="adductors">adductors</option>
          <option value="biceps">biceps</option>
          <option value="calves">calves</option>
          <option value="chest">chest</option>
          <option value="forearms">forearms</option>
          <option value="glutes">glutes</option>
          <option value="hamstrings">hamstrings</option>
          <option value="lats">lats</option>
          <option value="lower_back">lower_back</option>
          <option value="middle_back">middle_back</option>
          <option value="neck">neck</option>
          <option value="quadriceps">quadriceps</option>
          <option value="traps">traps</option>
          <option value="triceps">triceps</option>
        </select>
      </div>
      {console.log(muscle)}

      <Fetch muscleGroup={muscle} />
    </div>
  );
}

export default App;
