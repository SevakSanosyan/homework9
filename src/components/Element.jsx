import './Element.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function Element({post}){
  return (
    <NavLink to = {`/Post/${post.id}`} className="post">
            <h1>{post.title}</h1>
            <h4>{post.body}</h4>
    </NavLink>
  )
}


