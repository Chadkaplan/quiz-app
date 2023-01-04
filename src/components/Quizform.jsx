import React, { useState } from 'react';

const QuizForm = () => {
  const [questions, setQuestions] = useState([{ question: '', answers: ['', ''] }]);

  const handleQuestionChange = (event, index) => {
    const { value } = event.target;
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      newQuestions[index].question = value;
      return newQuestions;
    });
  };

  const handleAnswerChange = (event, questionIndex, answerIndex) => {
    const { value } = event.target;
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      newQuestions[questionIndex].answers[answerIndex] = value;
      return newQuestions;
    });
  };

  const handleAddQuestion = () => {
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      newQuestions.push({ question: '', answers: ['', ''] });
      return newQuestions;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
console.log(questions)
  };


  
  return (
    <form>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex}>
          <label htmlFor={`question-${questionIndex}`}>Question {questionIndex + 1}</label>
          <input
            id={`question-${questionIndex}`}
            value={q.question}
            onChange={event => handleQuestionChange(event, questionIndex)}
          />
          {q.answers.map((a, answerIndex) => (
            <div key={answerIndex}>
              <label htmlFor={`question-${questionIndex}-answer-${answerIndex}`}>
                Answer {answerIndex + 1}
              </label>
              <input
                id={`question-${questionIndex}-answer-${answerIndex}`}
                value={a}
                onChange={event => handleAnswerChange(event, questionIndex, answerIndex)}
              />
            </div>
          ))}
        </div>
      ))}
      <button type="button" onClick={handleAddQuestion}>
        Add Question
      </button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default QuizForm;
