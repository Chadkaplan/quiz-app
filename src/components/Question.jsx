import React from "react";
import data from "../data/questions.json";
import "./question.css";

const Question = () => {
  // const ListAnswers = data.Choices.map((choice) =>
  // <p>{choice}</p>)
  const ListQuestions = data.map((question) => (
    <div key={question.id}>
      <h5>{question.Question}</h5>
      {/* <button className="choice-btn">{question.Choices}</button> */}
    </div>
  ));

  return (
    <div>
      {data.map((question) => {
        return (
          <div key={question.id}>
            <h2>{question.Question}</h2>
            {data.Choices.map((choice, index) => {
              return (
                <div key={index}>
                  <h2>{choice}</h2>
                </div>
              );
            })}

            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default Question;
