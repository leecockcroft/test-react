import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import logo from './images/banners/this_is_fine.jpg'; 
import homepageImage from './images/topic_icons/buffalo_rising.jpg'
import geminiBanner from './images/gemini/banners/gemini_main.jpg'


import BannerImg from './images/gemini/similar_to_games_carousel/add_games_portlet.jpg'
import BannerImg2 from './images/gemini/similar_to_games_carousel/dnd.jpg'
import BannerImg3 from './images/gemini/similar_to_games_carousel/remove_guest.jpg'
import BannerImg4 from './images/gemini/similar_to_games_carousel/feed.jpg'
import BannerImg5 from './images/gemini/similar_to_games_carousel/games_type.jpg'
import BannerImg6 from './images/gemini/similar_to_games_carousel/look_and_feel_1.jpg'
import BannerImg7 from './images/gemini/similar_to_games_carousel/look_and_feel_2.jpg'
import DualLinks_Login from './images/ladbrokes/dualLinks/login.png'
import DualLinks_LandingPage from './images/ladbrokes/dualLinks/landing_pages.png'
import DualLinks_CreateNew from './images/ladbrokes/dualLinks/createNew.png'
import DualLinks_CreateNewBody from './images/ladbrokes/dualLinks/createNewBody.png'
import DualLinks_Dates from './images/ladbrokes/dualLinks/add_dates.png'
import './App.css';
import geminiCarousel from './images/gemini/banners/gemini_main.jpg'

import Nav from './Components/Nav'
import GameCarousel from './Components/GameCarousel'
import myJson from './images/files.json';



import Content from './Components/Content'



class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      
      logo: logo,



      //front page 
    items: [{
          cms: 'Coral',
          url: 'coral',
          guide: '1',
          img: homepageImage,
          steps: 'guide'
        },
        {
          cms: 'ladbrokes',
          url: 'ladbrokes',
          guide: '1',
          img: homepageImage,
          steps: 'guide'
        },
       
      ],


//CORAL GUIDES 

      gemGuide: [
      {
        cms: 'Similar To Game Carousel',
        url: 'game_carousel',
        guide: '5',
        img: homepageImage,
        steps: 'steps'
      }
      ],
      
      //GAME CAROUSEL

      
      gameCarousel: [
      {
        imgChange: BannerImg,
        header: "Add Portlet",
        subHeader: 'Add > Playtech Banner Portlet',
        extraHeader: '',
        extraDescription: ""
      }, 
      {
        imgChange: BannerImg2,
        header: "Drag into position",
        subHeader: 'Drop onto the portlet you want it to be above',
        extraHeader: 'Warning',
        extraDescription: "If you drop it incorrectly you will find it at the bottom of the page"
      }, 
      {
        imgChange: BannerImg3,
        header: "Remove Guest",
        subHeader: 'Uncheck guest from the view list > Save',
        extraHeader: 'Tip',
        extraDescription: "List can be found in 'spanner' > Configuration"
      }, 
      {
        imgChange: BannerImg4,
        header: "Select Feed",
        subHeader: 'Feed: "Because_You_played"View Mode: ItemsResponsive: Checked Items View Style: Extended Number of Columns: 5',
        extraHeader: 'Tip',
        extraDescription: "List can be found in 'spanner' > Configuration"
      },
       {
        imgChange: BannerImg5,
        header: "Select Games Types",
        subHeader: 'Games Types: Select all (Casino, Live, Slot, Room, Poker, BingoRoom)Show Jackpots: CheckedUse Favourites: CheckedRepeat for Table and Desktop TabsSubmit',
        extraHeader: 'Tip',
        extraDescription: "You don't need to submit before changing tabs"
      }, 
      {
        imgChange: BannerImg6,
        header: "Look and Feel: Advanced Styling",
        subHeader: 'Enter your custom CSS class names:[ hide-view-all because-you-played hidden ]Save Changes',
        extraHeader: 'Warning',
        extraDescription: "If you do this before Step 4, Preferences will be unavailable"
      }, 
      {
        imgChange: BannerImg7,
        header: "Look and Feel: Portlet Configuration",
        subHeader: 'Use Custom Title: Checked Portlet Title: Similar To',
        extraHeader: 'Warning',
        extraDescription: "If you drop it incorrectly you will find it at the bottom of the page"
      }
      ],




//LADBROKES
ladGuides:[
{
        cms: 'Dual Links',
        url: 'dual_links',
        guide: '5',
        img: homepageImage,
        steps: 'steps'
      }

],
//DUAL LINKS



      dualLinks: [{
        imgChange: DualLinks_Login,
        header: "Select CMS",
        subHeader: 'http://mobilecms.ladbrokes.com/ > Mobile',
        extraHeader: 'Login',
        extraDescription: "Language: EN<br/>Username: Stuart Tippett<br/>Password: Ladbrokes567"
      }, {
        imgChange: DualLinks_LandingPage,
        header: "Navigate to list",
        subHeader: 'Landing Page > Show Landing Pages',
        extraHeader: 'Info',
        extraDescription: "Green list items are active, red have expired"
      }, {
        imgChange: DualLinks_CreateNew,
        header: "Create New",
        subHeader: 'Create Landing Page<br/>Hide from SEO: unchecked<br/>Retail: checked<br/>Url:"ending url of your choice"<br/>Head: <pre><code>&lt;p&gt;You are being re-directed&lt;/p&gt;</code></pre>',
        extraHeader: '',
        extraDescription: ''
      }, {
        imgChange: DualLinks_CreateNewBody,
        header: "Body",
        subHeader: `<pre><code>&lt;script language="Javascript"&gt;
      &lt;!--
      if ((screen.width &gt;= 1024) &amp;&amp; (screen.height &gt;= 768)) {
        window.location = "[LIVE DESKTOP URL]";
      } else {
        window.location = "[LIVE MOBILE URL]";
      }
      --&gt;
    &lt;/script&gt;</code></pre>`,
        extraHeader: '',
        extraDescription: ""
      }, {
        imgChange: DualLinks_Dates,
        header: "Add Dates/Times (UK)",
        subHeader: `Start Date: must be active right away for testing<br/>
        End Date: use date if give. If not, min 3 months<br/>Save`,
        extraHeader: '',
        extraDescription: ""
      }]
    
  }
}
  
  

  changeBannerImage = (image) => {
    this.setState({
      logo: image  
    })
  }
 
        
 

  render() {

    

    return (
      <BrowserRouter>
    
        {/*<div className="container">*/}

          {/*<Route exact path="/" render={ () => }/>*/}

        <Route path="/"
          render={
            () => <Content />        
          }
          
        />
      
        {/*<Route path="/"
          render={
            () => <Nav items={this.state.items}/>        
          }
        
        />


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

              

    </div>*/}
     </BrowserRouter>


    );
  }
}

export default App;
