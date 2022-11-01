import React from "react";
import data from "../data/questions.json";
import "./question.css";

const Question = () => {


  return (
<>
{data.map((question) => (
  <div key={question.id}>
    <h1>{question.Question}</h1>
    {question.Choices.map((choice, index) => (
      <button className="choice-btn" key={index}>{choice}</button>
      ))}
  </div>
))}
</>
)

};
export default Question;
