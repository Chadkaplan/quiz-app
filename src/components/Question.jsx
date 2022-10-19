import React from "react";
import data from "../data/questions.json";

const Question = () => {
  // const ListAnswers = data.Choices.map((choice) =>
  // <p>{choice}</p>)
  const ListQuestions = data.map((question) => (
    <div key={question.id}>
      <h5>{question.Question}</h5>
      {data.Choices.map((choice) => (
        <div>{choice}</div>
      ))}
    </div>
  ));
  console.log(data[0].Choices);
  return (
    <>
      {ListQuestions}
    </>
  );
};

export default Question;
