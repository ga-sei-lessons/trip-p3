import axios from 'axios'
import { useState } from 'react'

export default function ExpenseTool(props) {

  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${userId}/trips/${tripId}`)




  return (
      <div>
          Hello from ExpenseTool
      </div>
  )
}