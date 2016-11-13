import React, { Component } from 'react';
import './App.css';

let jsonData = require('./mnmlvng.json');
jsonData.replace("": "", '');
class itemDetail extends Component {
  render() {
    return <div className="itemDetail">{this.props.itemDescription}</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.itemDescription = 'Shirt (medium)';
  }

  render() {
    return (
      <div className="App">
        <div className="itemCard">
          <itemDetail itemDescription={this.props.itemDescription} />
          <div className="itemDetail">Urban Outfitters Stevens Cross-Dyed Button-Down</div>
          <div className="itemDetail">Owned</div>
          <div className="itemDetail">living room; closet</div>
          <div className="itemDetail">This is the first medium size shirt I purchased after losing over 55 lbs in 2016.</div>
        </div>
      </div>
    );
  }
}

export default App;
