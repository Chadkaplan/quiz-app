import React, { useState } from "react";

const QuizForm = () => {
  const [questions, setQuestions] = useState([
    { question: "", answers: ["", ""] },
  ]);

  const handleQuestionChange = (e, index) => {
    const { value } = e.target;
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index].question = value;
      return newQuestions;
    });
  };

  const handleAnswerChange = (e, qIndex, aIndex) => {
    const { value } = e.target;
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[qIndex].answers[aIndex] = value;
      return newQuestions;
    });
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.push({ question: "", answers: ["", ""] });
      return newQuestions;
    });
  };

  return (
    <form>
      {questions.map((q, qIndex) => (
        <div key={qIndex}>
          <label htmlFor={`question-${qIndex}`}>Question {qIndex + 1}</label>
          <input
            id={`question-${qIndex}`}
            value={q.question}
            onChange={(e) => handleQuestionChange(e, qIndex)}
          />
          {/* Attempt to label the multiple choice answers A B C D currently does not work. Might need to try something besides ASCII like an array with the alphabet */}
          {q.answers.map((a, aIndex) => (
            <div key={aIndex}>
              <label htmlFor={`question-${qIndex}-answer-${aIndex}`}>
                {String.fromCharCode(65 + aIndex)}
              </label>
              <input
                id={`question-${qIndex}-answer-${aIndex}`}
                value={a}
                onChange={(e) => handleAnswerChange(e, qIndex, aIndex)}
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
