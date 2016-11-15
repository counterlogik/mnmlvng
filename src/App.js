import React, { Component } from 'react';
import './App.css';
import './ionicons.css';
import shirtPicture from './img/uo_stevens_shirt.jpg';
//import shirtData from './mnmlvng.json';

const shirtData = {
  'Description': 'Shirt (medium)',
  'Category': 'Wardrobe',
  'Model': 'UO Stevens Cross-Dyed',
  'Link': 'http://www.urbanoutfitters.com/urban/catalog/productdetail.jsp?id=39390299&category=M_TOPS_SHIRTS&color=041',
  'Count': 1,
  'Spark': 'Love',
  'Location': 'living room; closet',
  'Notes': 'first medium I purchased after losing weight in 2016'
}

const categoryToIconCharacterMap = {
  'Wardrobe': 'tshirt-outline'
};

class ItemDetail extends Component {
  render() {
    console.log(categoryToIconCharacterMap[this.props.category]);
    let icon = this.props.icon || categoryToIconCharacterMap[this.props.category] || '';
    let addClasses = this.props.addClasses ? ' ' + this.props.addClasses : '';
    return <div className="ItemDetail" href={this.props.link}>
      {icon && <PrefixIcon icon={icon} />}
      <div className={'entryText' + addClasses} title={this.props.url}>
        {this.props.description}
      </div>
    </div>;
  }
}

class ItemImage extends Component {
  render() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.image + ')'
    };
    return <div className="ItemImage" style={divStyle} alt={this.props.category}></div>;
  }
}



class PrefixIcon extends Component {
    render() {
      return <div className="PrefixIcon"><i className={'icon ion-'+this.props.icon} /> </div>;
    }
}

class ItemCard extends Component {
  render() {
    return <div className="ItemCard">
      <ItemImage image={shirtPicture} category={this.props.details.Category} />
      <div className="itemContent">
        <ItemDetail category={this.props.details.Category} description={this.props.details.Description} addClasses="title" />
        <ItemDetail icon={'link'} description={this.props.details.Model} url={this.props.details.Link} />
        <ItemDetail icon={'android-locate'} description={this.props.details.Location} />
        <ItemDetail description={this.props.details.Notes} addClasses="notes" />
      </div>
    </div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemCard details={shirtData} />
      </div>
    );
  }
}

export default App;
