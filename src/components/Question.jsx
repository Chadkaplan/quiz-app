import React from 'react'

const Question = () => {
  return (
    <>
    <form>
        {/* Dynamically label question number */}
    <label>
      Question 1:
      <input type="text" name="name" placeholder="Question"></input>
    </label>
    <input type="submit" value="Submit" />
  </form>
    </>
  )
}

export default Question