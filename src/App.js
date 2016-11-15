import React, { Component } from 'react';
import './App.css';
import './ionicons.css';
import shirtPicture from './img/uo_stevens_shirt.jpg';
//import shirtData from './mnmlvng.json';

// Load item data from this object. This object loading will be replaced by data pulled from a persistent database eventually.
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
  constructor(props) {
    super(props);
    this.state = {
      details: shirtData,
      isUnderEdit: false,
    };

    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    this.setState({
      isUnderEdit: !this.state.isUnderEdit
    });
  }

  render() {
    return <div className="ItemCard">
      <ItemImage image={shirtPicture} category={this.state.details.Category} />
      <div className="itemContent">
        <EditButton onEditClick={this.handleEditClick} isUnderEdit={this.state.isUnderEdit} />
        <ItemDetail category={this.state.details.Category} description={this.state.details.Description} addClasses="title" />
        <ItemDetail icon={'link'} description={this.state.details.Model} url={this.state.details.Link} />
        <ItemDetail icon={'android-locate'} description={this.state.details.Location} />
        <ItemDetail description={this.state.details.Notes} addClasses="notes" />
      </div>
    </div>;
  }
}

class EditButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onEditClick();
  }

  render() {
    let addClasses = this.props.isUnderEdit ? ' isUnderEdit' : '';
    return <div className={'EditButton materialShadow' + addClasses} onClick={this.handleClick}>
      <i className={'icon ion-edit'} />
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
