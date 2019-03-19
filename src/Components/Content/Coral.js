import React, { Component } from 'react';
import Nav from '../Nav'

import {BrowserRouter,Route,Switch} from 'react-router-dom'



class Coral extends Component {
  
  constructor(props) {
  super();
  
  this.state = {
  
    items: [
      {
          cms: 'nnytnn',
          url: '/coral',
          guide: '1',
        img: '',
          steps: 'guide'
        },
        {
          cms: 'ladbrokrrredfdfds',
          url: '/ladbrokes',
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

export default Coral;
