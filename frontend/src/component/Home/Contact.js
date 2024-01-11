import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
export const Contact = () => {
    const obj={
        name:"krishna"
    }
  return (
    <div>
     <Link className="productCard" to={"/"}>back to home</Link>
    </div>
  )
}
