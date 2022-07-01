import React from 'react'
import {Link} from "react-router-dom"

function VoteApp() {
  return (
    <div>
        <h2>Welcome to Vote App</h2>
        <Link to="/users" > Click here for going to voting...</Link>

    </div>
  )
}

export default VoteApp