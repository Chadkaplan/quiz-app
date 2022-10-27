import React from "react";
import data from "../data/questions.json";
import "./question.css";

const Question = () => {
  // const ListQuestions = data.map((question) => (
  //   <div key={question.id}>
  //     <h5>{question.Question}</h5>
  //     <div className="choice-btn">{question.Choices.map(choice) => (

  //       <button>{choice}</button>
  //     )
  //     }</div>
  //   </div>
  // ));

  return (
// {dataItems.map((item, index) => (
//   <div key={index}>
//     <h1>{item.title}</h1>
//     {item.content.map((c, i) => (
//       <div key={i}>
//         <img src={c.imageUrl} />
//         <h3>{c.title}</h3>
//         <h3>{c.description}</h3>
//         <hr />
//       </div>
//     ))}
//   </div>
// ))}
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
