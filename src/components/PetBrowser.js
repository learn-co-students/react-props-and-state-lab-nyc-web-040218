import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  allPets = () => {
    this.props.pets.map(pet => {
      return (
        < Pet pet={pet} />
      )
    });
  }

  render() {
  
    return (
      <div className="ui cards">
        < Pet pet={this.props.pets} />
      </div>
    );
  }
}

export default PetBrowser;
