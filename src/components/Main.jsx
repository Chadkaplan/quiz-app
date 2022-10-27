import React from 'react'
import { Link } from 'react-router-dom'
import Question from './Question'

const Main = () => {
  return (
    <div>
      <Link to="/Create">
      <button>Create a Quiz</button>
      <Question/>
      </Link>
    </div>
  )
}

export default Main

