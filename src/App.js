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
      <input type="text" className={'entryText' + addClasses} title={this.props.url} value={this.props.description} onChange={this.props.formUpdate} disabled={this.props.elementDisabled} />
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
      category: shirtData.Category,
      description: shirtData.Description,
      link: shirtData.Link,
      model: shirtData.Model,
      location: shirtData.Location,
      notes: shirtData.Notes,
      isUnderEdit: false,
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    /*this.handleEditClick = this.handleSubmit.bind(this);*/
  }

  handleEditClick() {
    this.setState({
      isUnderEdit: !this.state.isUnderEdit
    });
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleModelChange(event) {
    this.setState({model: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleNotesChange(event) {
    this.setState({notes: event.target.value});
  }
/*
  handleSubmit(event) {
    console.log('Item details are: ' + this.state.value);
    event.preventDefault();
  }
*/
  render() {
    return <div className="ItemCard">
      <ItemImage image={shirtPicture} category={this.state.Category} />
      <div className="itemContent">
        <EditButton onEditClick={this.handleEditClick} isUnderEdit={this.state.isUnderEdit} />
        <form/* onSubmit={this.handleSubmit}*/>
          <ItemDetail category={this.state.category} detailType="Description" description={this.state.description} addClasses="title" formUpdate={this.handleDescriptionChange} elementDisabled={!this.state.isUnderEdit} />
          <ItemDetail icon={'link'} detailType="Model" description={this.state.model} url={this.state.link} formUpdate={this.handleModelChange} elementDisabled={!this.state.isUnderEdit} />
          <ItemDetail icon={'android-locate'} detailType="Location" description={this.state.location} formUpdate={this.handleLocationChange} elementDisabled={!this.state.isUnderEdit} />
          <ItemDetail detailType="Notes" description={this.state.notes} addClasses="notes" formUpdate={this.handleNotesChange} elementDisabled={!this.state.isUnderEdit} />
        
        </form>
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
    let editButtonIconName = this.props.isUnderEdit ? 'ion-close' : 'ion-edit';
    return <div>
      <div className={'EditButton editCancel materialShadow' + addClasses} onClick={this.handleClick}>
        <i className={'icon ' + editButtonIconName} />
      </div>
      <div className={'EditButton editSubmit materialShadow' + addClasses} >
        <i className={'icon ion-checkmark'} />
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
