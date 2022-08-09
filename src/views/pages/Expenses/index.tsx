import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Expenses() {

    let navigate = useNavigate();

    function tohome(){
        navigate('/')
    }

  return (
    <div>Expenses
        <button onClick={tohome}>to</button>
    </div>
  )
}
