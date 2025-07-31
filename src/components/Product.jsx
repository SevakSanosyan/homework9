import React from 'react'
import {useParams} from 'react-router-dom'
import './Product.css'
export function Product({Posts}){
    const {id} = useParams()
    
    const prodd = Posts.find((p) => p.id === +id)
    console.log(prodd);
    
    return (
        <div className="product-container">
        <div className="product-card">
          <h1 className="product-title">{prodd.title}</h1>
          <p className="product-body">{prodd.body}</p>
        </div>
      </div>
  )
}

