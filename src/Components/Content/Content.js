import React, { Component } from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../Header'
import logo from '../../images/banners/this_is_fine.jpg'; 
import Ladbrokes from './Ladbrokes/Ladbrokes'
import Lemini from './Ladbrokes/Lemini'
import Coral from './Coral'
import Nav from '../Nav'

class Content extends Component {
  
  constructor(props) {  super();

    this.state = {
      logo: logo,
      items: [
        {
            cms: 'Coral',
            url: '/coral',
            guide: '1',
            img: logo,
            steps: 'guide'
          },
          {
            cms: 'ladbrokes',
            url: '/ladbrokes',
            guide: '1',
            img: logo,
            steps: 'guide'
          },
        
      ]
    }
    
  }
  
  componentDidMount() {
    // query the DB
    // set state of DIVS accordingly
  }
  

  render() {


    return ( 
      <React.Fragment>      
        <Header
          logo={this.state.logo}
          subheading="Web Development Guide"
          changeBannerImage={this.changeBannerImage}
          />

        <Switch> {/* Switch renders the first child <Route> or <Redirect> that matches the location.*/}
    
          <Route exact name='menu'
              path={process.env.REACT_APP_ROUTE + '/'}
              render={(props) => 
                  (
                    <Nav items= {this.state.items}  />)}
                />
          
                <Route exact name='ladbrokes'
                    path={process.env.REACT_APP_ROUTE + '/ladbrokes'}
                    render={(props) => 
                        (
                        <Ladbrokes/>)}
                      />
                    
                      <Route exact name='coral'
                          path={process.env.REACT_APP_ROUTE + '/coral'}
                          render={(props) => 
                              (
                              <Coral/>)}
                            />
                      
                            
                  
                      

        
        </Switch>
      </React.Fragment>
    );
  }
}

export default Content;
