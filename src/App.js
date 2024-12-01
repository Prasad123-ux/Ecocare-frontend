import React from 'react'
import Main from './Componants/Main'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import ImageColorUploader from './Componants/ImageColorUploader'
import Footer from './Componants/Footer'
import Navbar from './Componants/Navbar'
import AboutSection from './Componants/AboutSection'
import DiseaseDetailsSection from './Componants/DiseaseDetaillSection'
import DocumentationSection from './Componants/DocumentationSection'


export default function App() {
  return (
    <div>
      
      <BrowserRouter>  
       <Navbar/>
      <Routes>
       <Route exact path="/" element={<Main/>}/>
        <Route exact path="/scanImage" element={<ImageColorUploader/>}/>
        <Route exact path="/aboutSection" element={<AboutSection/>}></Route>
        <Route exact path="/diseasedetailsection" element={<DiseaseDetailsSection/>}/>
        <Route exact path="/documentationSection" element={<DocumentationSection/>}/>




        {/* </Route> */}
      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </div>
  )
}
