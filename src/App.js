import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import logo from './images/banners/this_is_fine.jpg'; 
import homepageImage from './images/topic_icons/buffalo_rising.jpg'
import geminiBanner from './images/gemini/banners/gemini_main.jpg'
import './App.css';
import geminiCarousel from './images/gemini/banners/gemini_main.jpg'

import Nav from './Components/Nav'
import Header from './Components/Header'
import GameCarousel from './Components/GameCarousel'







class App extends Component {
  constructor(props) {
    super(props);
      this.state = {

      items:[
      {
        cms:'Gemini',
        url:'gemini',
        guide:'1',
        img:homepageImage
      },

      {
        cms:'Lemini',
        url:'test',
        guide:'2',
        img:homepageImage
      }
    ]

  }
}


  render() {
    return (
      <BrowserRouter>
        <div className="container">
         
          <Route path="/home" render={ () => <Header logo={logo}/>}/>
           <ul>
            <Route path="/home" render={ () => <Nav items={this.state.items}/>}/>
          </ul>


          <Route path="/gemini" render={ () => <Header logo={geminiBanner}/>}/>"
           <ul>
            <Route path="/gemini" render={ () => <Nav items={this.state.items}/>}/>
          </ul>
<GameCarousel/>

    </div>
     </BrowserRouter>


    );
  }
}

export default App;
