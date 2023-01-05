import React from "react";
import Quizform from "./Quizform";

const Create = () => {
  return (
    <div>
      <h1>Create a Quiz in Seconds</h1>
      <form>
        <label>
          Quiz Name
          <input type="text" name="name" placeholder="Your Quiz Name"></input>
        </label>
        <Quizform />
      </form>
    </div>
  );
};

export default Create;
