import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Posts } from './components/database/posts'
import { Post } from './components/Posts'
import { Error } from './components/Error'
import { Layout } from './components/Layout/Layout'
import { Product } from './components/Product'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/Post' element={<Post Posts={Posts} />} />
        <Route path='*' element={<Error />}/>
        <Route path='/Post/:id' element={<Product Posts={Posts} />}></Route>
      </Route>
    </Routes>
  
    </>
  )
}

export default App
