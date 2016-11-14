import React, { Component } from 'react';
import './App.css';
import './ionicons.css';

class ItemDetail extends Component {
  render() {
    return <div className="itemDetail">{this.props.itemDescription}</div>;
  }
}

class ItemImage extends Component {
  render() {
    return <div className="itemImage"><img src={this.props.itemImage} alt={this.props.category}></img></div>;
  }
}

const LinkIcon = () => (
    <div className="LinkIcon"> </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="itemCard">
          <ItemImage itemImage={this.props.image} />
          <ItemDetail prefixIcon={this.props.category} itemDescription={`Button-down shirt (medium)`} />
          <ItemDetail prefixIcon={LinkIcon} itemDescription={`Urban Outfitters Stevens Cross-Dyed Button-Down`} />
          <ItemDetail prefixIcon="" itemDescription={`living room; closet`} />
          <ItemDetail itemDescription={`This is the first medium size shirt I purchased after losing over 55 lbs in 2016.`} />
        </div>
      </div>
    );
  }
}

export default App;
