import "./App.css";
import { useState } from "react";
import download from "./download.jpg";

function App() {
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [BMI, setBMI] = useState(0);
  const BMIcalculate=()=> 
  {
   if(weight <=0|| height<=0){
    return alert("please enter a valid input")

   }
    setBMI((parseFloat(weight) /( (height * height))).toFixed(2));
  }


  return (
    <div className="App">
      <header className="App-header">
      <img src ={download} width={100} height={100}/>
        <h1>BMI</h1>
        <label className="label1">
          ADD weight(in Kgs) :{""}
          <input onChange={(e) => setweight(e.target.value)} type="number" />
        </label>

        <label className="label1">
          ADD height (in Meters):{""}
          <input onChange={(e) => setheight(e.target.value)} type="number" />
        </label>

        <button className="button" onClick={BMIcalculate}  >
          Calculate BMI
          
        </button>

        <p className=" result">your BMI is {BMI}</p>
      </header>
    </div>
  );
}

export default App;
