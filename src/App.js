import React from 'react'
import Main from './Componants/Main'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import ImageColorUploader from './Componants/ImageColorUploader'


export default function App() {
  return (
    <div>
      
      <BrowserRouter>  
       
      <Routes>
       <Route exact path="/" element={<Main/>}/>
        <Route exact path="/scanImage" element={<ImageColorUploader/>}>

        </Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}
