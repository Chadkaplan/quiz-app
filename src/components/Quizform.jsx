import React, { useState } from 'react';

const QuizForm = () => {
  const [questions, setQuestions] = useState([{ question: '', answers: ['', ''] }]);

  const handleQuestionChange = (e, index) => {
    const { value } = e.target;
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      newQuestions[index].question = value;
      return newQuestions;
    });
  };

  const handleAnswerChange = (e, questionIndex, answerIndex) => {
    const { value } = e.target;
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

  return (
    <form>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex}>
          <label htmlFor={`question-${questionIndex}`}>Question {questionIndex + 1}</label>
          <input
            id={`question-${questionIndex}`}
            value={q.question}
            onChange={e => handleQuestionChange(e, questionIndex)}
          />
          {q.answers.map((a, answerIndex) => (
            <div key={answerIndex}>
              <label htmlFor={`question-${questionIndex}-answer-${answerIndex}`}>
                Answer {answerIndex + 1}
              </label>
              <input
                id={`question-${questionIndex}-answer-${answerIndex}`}
                value={a}
                onChange={e => handleAnswerChange(e, questionIndex, answerIndex)}
              />
            </div>
          ))}
        </div>
      ))}
      <button type="button" onClick={handleAddQuestion}>
        Add Question
      </button>
    </form>
  );
};

export default QuizForm;
