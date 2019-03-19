import React, { Component } from 'react';
import Nav from '../../Nav'
import Lemini from './Lemini'

import {BrowserRouter,Route,Switch} from 'react-router-dom'



class Ladbrokes extends Component {
  
  constructor(props) {
  super();
  
  this.state = {
  
    items: [
      {
          cms: 'Lemini',
          url: '/ladbrokes/lemini',
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
      
      <Switch> {/* Switch renders the first child <Route> or <Redirect> that matches the location.*/}
  
      <Route exact name='Lemini'
          path={process.env.REACT_APP_ROUTE + '/ladbrokes/lemini'}
          render={(props) => 
              (
              <Lemini/>)}
            />
        
                    
              
                
                    

      
      </Switch>
      
      
      </React.Fragment>
    );
  }
}

export default Ladbrokes;
