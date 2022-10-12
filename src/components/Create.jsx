import React from "react";
import Question from "./Question";

const Create = () => {
  return (
    <div>
      <h1>Create A Quiz in Seconds</h1>
      <form>
        <label>
          Quiz Name
          <input type="text" name="name" placeholder="Your Quiz Name"></input>
        </label>
        <input type="submit" value="Submit" />
        <Question/>
      </form>
    </div>
  );
};

export default Create;
