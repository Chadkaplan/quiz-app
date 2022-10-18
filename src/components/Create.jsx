import React from "react";
import Question from "./Question";

const Create = () => {
  return (
    <div>
      <h1>Create a Quiz in Seconds</h1>
      <form>
        <label>
          Quiz Name
          <input type="text" name="name" placeholder="Your Quiz Name"></input>
        </label>
        {/* <Question/> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Create;
