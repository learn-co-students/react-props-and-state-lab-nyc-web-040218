import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
  
  let getPets = Pets.map(pet, () => {
    return (
    <
    )
  }
  
    return (
      <div className="ui cards">
        < Pet pets={this.props.pets} />
      </div>
    );
  }
}

export default PetBrowser;
