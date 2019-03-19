import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
       <header>
        <div className="pageHeader">
          <h1 className="pageTitle">Web Development Guide</h1>
        </div>
        <div className="banner">
          <img className="banner_img" src={this.props.logo} alt=""/>
        </div>
        <div className="contents_header">
          <h2 className="contents_title">{this.props.subheading}</h2>
          <h4 className="contents_topics">2 Topics</h4>
      	</div>
      </header>

   

 





    );
  }
}

export default Header;



  