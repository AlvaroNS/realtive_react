import { useState } from 'react'
import './App.css'

import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, Specific } from './containers'

function App() {

  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Specific/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
