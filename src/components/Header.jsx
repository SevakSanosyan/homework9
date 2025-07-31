import React from "react"
import { useNavigate } from "react-router-dom"

import { NavLink } from "react-router-dom"
export function Header() {
    const navigate =  useNavigate()
    return (
        <div>
            <NavLink className={({isActive}) => isActive ? 'activeee' : '' } to='/Post'>post</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeee' : '' } to='/about'>about</NavLink>
            <button onClick={ () => navigate(-1)}>back</button>
        </div>
    )
}