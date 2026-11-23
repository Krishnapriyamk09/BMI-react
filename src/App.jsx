import React, { useState } from "react";
import "./index.css";

function App() {

  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");

  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBMI = () => {

    if (!gender || !weight || !height) { 
      setBmi("");
      setMessage("Please fill in all the fields.");
      return;
    }

    
    let heightInMeter;
    if (heightUnit === "cm") {
      heightInMeter = Number(height) / 100;
    } else {
      heightInMeter = Number(height);
    }

    const weightInKg = Number(weight);
    const result =
      weightInKg / (heightInMeter * heightInMeter);
    setBmi(result.toFixed(2));

    // BMI category
    if (result < 18.5) {
      setMessage("Underweight");
    } 
    else if (result < 25) {
      setMessage("Normal weight");
    } 
    else if (result < 30) {
      setMessage("Overweight");
    } 
    else {
      setMessage("Obese");
    }
  };

  return (
    <div className="page">
      <div className="bmi-card">
        <div className="icon">
          ⚖️
        </div>
        <h1>BMI Calculator</h1>
        <p className="subtitle">
          Check your Body Mass Index
        </p>


        <div className="input-group">
          <label>Gender</label>
          <div className="input-box">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">
                Select gender
              </option>

              <option value="male">
                Male
              </option>

              <option value="female">
                Female
              </option>
            </select>

          </div>

        </div>


  
        <div className="input-group">
          <label>Weight</label>
          <div className="input-box">
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
            />

            <span>kg</span>

          </div>

        </div>


        {/* Height */}
        <div className="input-group">

          <label>Height</label>

          <div className="input-box">

            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
            />

            <select
              value={heightUnit}
              onChange={(e) =>
                setHeightUnit(e.target.value)
              }
            >
              <option value="cm">
                cm
              </option>

              <option value="m">
                m
              </option>
            </select>

          </div>

        </div>


        {/* Calculate Button */}
        <button onClick={calculateBMI}>
          Calculate BMI
        </button>


        {/* Error message */}
        {message && !bmi && (
          <p className="error">
            {message}
          </p>
        )}


        {/* Result */}
        {bmi && (

          <div className="result">

            <p>Your BMI</p>

            <h2>
              {bmi}
            </h2>

            <div className="status">
              {message}
            </div>

          </div>

        )}


        {/* BMI Information */}
        <div className="info">

          <div>
            <span>Underweight</span>
            <strong>&lt; 18.5</strong>
          </div>

          <div>
            <span>Normal</span>
            <strong>18.5 - 24.9</strong>
          </div>

          <div>
            <span>Overweight</span>
            <strong>25 - 29.9</strong>
          </div>

          <div>
            <span>Obese</span>
            <strong>30+</strong>
          </div>

        </div>

        <p className="note">
          BMI is a screening measure and is not a
          diagnosis of health.
        </p>

      </div>

    </div>
  );
}

export default App;