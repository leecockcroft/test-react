import React, { Component } from 'react';
import Nav from '../../Nav'

import {BrowserRouter,Route,Switch} from 'react-router-dom'



class Lemini extends Component {
  
  constructor(props) {
  super();
  
  this.state = {
  
    items: [
      {
          cms: 'carosel',
          url: '/lemini',
          guide: '1',
          img: '',
          steps: 'guide'
        },
        {
          cms: 'Desktop',
          url: '/desktop',
          guide: '1',
            img: '',
          steps: 'guide'
        },
      
    ]
  }
  
  }

  


  

  render() {


    return ( 
      <React.Fragment>      
    
      
      <Nav items={this.state.items}/>
      
        
      </React.Fragment>
    );
  }
}

export default Lemini;
