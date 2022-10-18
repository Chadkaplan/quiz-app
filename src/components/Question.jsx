import React from 'react'
import data from "../data/questions.json"

const Question = () => {
  const ListQuestions = data.map((question) =>
  <div key={question.id}>
  <h5>{question.Question}</h5>
  <h5>{question.Choices}</h5>
  </div>)
  return (
    <>
    {ListQuestions}
    </>
    )
  }


export default Question