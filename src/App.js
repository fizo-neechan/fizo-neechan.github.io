import Intro from './components/Intro';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Spacer from './components/Spacer';
import React from 'react';

import './index.css'

function App() {
  return (
    <>
      <Intro/>
      <Spacer/>
      <About/>
      <Spacer/>
      {/* <Services/>
      <Spacer/> */}
      <Projects/>
      <Spacer/>
      <Contact/>
    </>
  );
}

export default App;
