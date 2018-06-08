import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  componentWillMount() {
    fetch(`/api/pets${(this.state.filters.type !== "all") ? "?type=" + this.state.filters.type : ""}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pets: res
        })
      })
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    this.componentWillMount();
  }

  onAdoptPet = (event) => {
    console.log("onAdoptPet function", event.target.id);
    this.setState({
      adoptedPets: [...this.state.adoptedPets, event.target.id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} clickHandler={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onClickHandler={this.onAdoptPet} adoptedArray={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
