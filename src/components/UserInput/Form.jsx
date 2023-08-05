import React, { useState } from "react";
const initialValue = {
  "current-savings": 10000,
  "yearly-contribution": 2000,
  "expected-return": 7,
  duration: 10,
};
const Form = (props) => {
  console.log(props.onCalulate, props, "from ma");
  const [userInput, setUserInput] = useState(initialValue);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };
  const resetHandler = (input, value) => {
    setUserInput(initialValue);
  };
  const inputChangeHandler = (input, value) => {
    console.log(input, value);
    setUserInput((pre) => {
      return { ...pre, [input]: value };
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) => {
                inputChangeHandler("current-savings", event.target.value);
              }}
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) => {
                inputChangeHandler("yearly-contribution", event.target.value);
              }}
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) => {
                inputChangeHandler("expected-return", event.target.value);
              }}
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) => {
                inputChangeHandler("duration", event.target.value);
              }}
              value={userInput.duration}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
