import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Main to QuizMaster!</h1>
      <p className="welcome-description">
        Test your knowledge with our fun and challenging quizzes.
      </p>
      <div className="welcome-actions">
        <a href="/create" className="welcome-create-button">
          Create a Quiz
        </a>
        <a href="/play" className="welcome-play-button">
          Play a Quiz
        </a>
      </div>
    </div>
  );
};

export default Main;
