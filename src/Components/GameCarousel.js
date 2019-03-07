import React, { Component } from 'react';
import '../steps.scss';

class GameCarousel extends Component {


  render() {
    return (

 <div>
    
    <div className="contents_header">
      <h2 className="contents_title">Similar To: Game Carousel</h2>
      <h4 className="contents_topics">&nbsp;</h4>
    </div>
    <div className="step">
      <span className="step-num">1</span>
      <div className="step-left">
        <div className="step-info">
          <h3 className="step-title">Add Portlet</h3>
          <p className="step-content">Add > Playtech Banner Portlet</p>
        </div>
        <div className="step-extra">
          <h4 className="step-notice-title"></h4>
          <p className="step-notice-content"></p>
          <div className="step-icons">
            <div className="step-icon"><i className="fa">&#xf071;</i></div>
            <div className="step-icon"><i className="fa">&#xf0eb;</i></div>
            <div className="step-icon"><i className="fa">&#xf074;</i></div>
            <div className="step-icon"><i className="fa">&#xf0ad;</i></div>
          </div>
        </div>
      </div>
      <img className="step-img" src="../images/gemini/similar_to_games_carousel/add_games_portlet.jpg" alt="Add Games Portlet"/>
    </div>
  

    </div>

   

   

    

  


       );
  }
}

export default GameCarousel;