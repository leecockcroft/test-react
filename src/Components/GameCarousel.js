import React, { Component } from 'react';
import '../steps.scss';

class GameCarousel extends Component {


  render() {
    return (

 <div>

     {
      this.props.items.map((item, index) => (
<div>
    
    <div className="step">
      <span className="step-num">{index+1}</span>
      <div className="step-left">
        <div className="step-info">
          <h3 className="step-title">{item.header}</h3>
          <p className="step-content">{item.subHeader}</p>
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
           <div class="step-extra">
          <h4 class="step-notice-title">{item.extraHeader}</h4>
          <p class="step-notice-content">{item.extraDescription}</p>
          <div class="step-icons">
            <div class="step-icon active"><i class="fa">&#xf071;</i></div>
            <div class="step-icon"><i class="fa">&#xf0eb;</i></div>
            <div class="step-icon"><i class="fa">&#xf074;</i></div>
            <div class="step-icon"><i class="fa">&#xf0ad;</i></div>
          </div>
        </div>
        </div>
      </div>
      <img className="step-img" src={item.imgChange} alt="Add Games Portlet"/>
    </div>
  
    </div>
 ))}

</div>
   

   

    

  


  );
  }
}

export default GameCarousel;