import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Link to="/Create">
      <button>Create a Quiz</button>
      </Link>
    </div>
  )
}

export default Main

