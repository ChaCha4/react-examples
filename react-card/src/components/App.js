import React, { Component } from 'react';
import './app.css';
import pic from '../img/1.png';
import Card from './Card';
class App extends Component {
  render() {
    return (
      <>
        <div className="box">
          <div className="card">
            <div className="title">Card title</div>
            <div className="contain">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </div>
          </div>
        </div>
        <Card
          imgSrc={pic}
          title="Europe Street beat"
          pra="www.instagram.com"
          cardWidth="300px"
        />
      </>
    );
  }
}

export default App;
