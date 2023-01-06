import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="sticky-footer">
      <p>Copyright &copy; 2023 QuizMaster</p>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
