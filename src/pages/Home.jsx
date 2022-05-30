import React from 'react';
import Welcome from "../components/Welcome";
import Greeting from "../components/Greeting";
import Skills from "../components/Skills";
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Downloads from '../components/Downloads';

function Home() {
    return (
       <div class="home">
       <Navigation/>
       <Welcome />
       <Greeting/>
       <Skills/>
       <Downloads/>
       <Contact/>

       </div>
 
    );
  };
    
  export default Home;