import React from 'react';

const questions=  [{question: 'question 1', answers: ["answer 1, answer 2"]}, {question: 'question 2', answers: ["answer 3, answer 4"]}]
// Need to take in props instead of hard coded questions
const Play = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState({});

  const handleChange = (e, questionIndex) => {
    const selectedAnswer = e.target.value;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: selectedAnswer
    });
  };

  return (
    <form>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          {question.answers.map((answer, i) => (
            <div key={i}>
              <input
                type="radio"
                name={`question-${index}`}
                value={answer}
                checked={selectedAnswers[index] === answer}
                onChange={e => handleChange(e, index)}
              />
              <label>{answer}</label>
            </div>
          ))}
        </div>
      ))}
    </form>
  );
};

export default Play;