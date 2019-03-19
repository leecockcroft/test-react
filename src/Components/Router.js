import React, { Component } from 'react';
import Nav from './Components/Nav'
import Header from './Components/Header'
import GameCarousel from './Components/GameCarousel'
import {BrowserRouter,Route} from 'react-router-dom'
class Router extends Component {


  render() {
    return (
      <div>
    <Route exact path="/" render={ () => <Header logo={logo} subheading="Web Development Guide"/>}/>

           <ul>
            <Route exact  path="/" render={ () => <Nav items={this.state.items}/>}/>
          </ul>


          <Route path="/coral" render={ () => <Header logo={geminiBanner}/>}/>
           <ul>
            <Route path="/coral" render={ () => <Nav items={this.state.gemGuide}/>}/>
          </ul>

               <Route path="/ladbrokes" render={ () => <Header logo={geminiBanner}/>}/>
           <ul>
            <Route path="/ladbrokes" render={ () => <Nav items={this.state.ladGuides}/>}/>
          </ul>

           <Route path="/dual_links" render={ () => <Header logo={geminiBanner}/>}/>
           <ul>
            <Route path="/dual_links" render={ () => <GameCarousel items={this.state.dualLinks}/>}/>
          </ul>









          <Route path="/game_carousel" render={ () => <Header logo={logo} subheading='gameCarousel'/>}/>
           <ul>

            <Route path="/game_carousel" render={ () => <GameCarousel items={this.state.gameCarousel}/>}/>

          </ul>
</div>

    );
  }
}

export default Router;
