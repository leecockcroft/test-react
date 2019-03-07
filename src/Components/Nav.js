import React, { Component } from 'react';
import '../App.css';

class Nav extends Component {


  render() {
    return (
  <ul>
        {this.props.items.map((item, index) => (
               
          <a href={item.url}><li className="topic">
          <div className="topic_thumb_holder">
            <img className="topic_thumb" src={item.img} alt="" />
          </div>
          <div className="topic_info">
            <h4 className="topic_title">{item.cms}</h4>
            <p className="topic_steps">{item.guide} guide</p>
          </div>
        </li></a>
        
         ))}
    
</ul>

    );
  }
}

export default Nav;
