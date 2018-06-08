import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  // state = {
  //   pets: this.props.pets
  // }
  render() {
    const petsCreation = this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onClickHandler} adoptedArray={this.props.adoptedArray} />
    })
    return (
      <div className="ui cards">
        {petsCreation}
      </div>
    );
  }
}

export default PetBrowser;
