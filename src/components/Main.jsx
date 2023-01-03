import React from 'react'
import { Link } from 'react-router-dom'
import QuizForm from './Quizform'

const Main = () => {
  return (
    <div>
      <Link to="/Create">
      <button>Create a Quiz</button>
      </Link>
      <QuizForm />
    </div>
  )
}

export default Main

