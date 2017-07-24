//include react
import React, { Component } from 'react';
//Importing the Navbar
import Navbar from './components/children/Navbar';
//Importing content
import Landing from './components/children/Landing';
//Importing the footer
import Footer from './components/children/Footer';
//Import the float button
import FloatBtn from './components/children/button-floating';
//Import title info
import Title from './components/children/title';
//Import about info
import About from './components/children/about';
//Import projects
import Projects from './components/children/projects';
//Import contact form
import Contact from './components/children/contact';


class App extends Component {
  render() {
    return (
        <div id="main">
            <a name="home"> </a>
            <Navbar/>
            <div className="container wrapper valign-wrapper">
                <Landing />
                <Title/>
            </div>

            <About/>
            <h5 className="center white-text" id="projects">Featured Projects</h5>
            <Projects/>

            <h5 className="center white-text" id="contact">Let's Collaborate</h5>

            <Contact />

            <Footer/>
            <FloatBtn />
        </div>
    );
  }
}

export default App;
