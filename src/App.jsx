import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'

import { Post } from './components/Posts'
import { Error } from './components/Error'
function App() {


  return (
    <>
    <Header />
    <Routes>
    <Route path='/Post' element={<Post />}></Route>

    <Route path='*' element={<Error />}/>
    </Routes>
  
    </>
  )
}

export default App
