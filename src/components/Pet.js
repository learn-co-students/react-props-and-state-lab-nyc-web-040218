import React from 'react';

const gender = () => {
  if (this.props.gender === "male"){
    return "♂"
  }else{
    return "♀"
  }
}

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }
  
  adoptPet = (e) => {
    this.props.onAdoptPet(e.target.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          {/* <a className="header">Pet name {this.props.name} {gender()}</a> */}
          <div className="meta">
            <span className="date">Pet type: {this.props.type}</span>
          </div>
          <div className="description" onClick={this.adoptPet}>
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.isAdopted ? (<button className="ui primary button" id={this.props.id} onClick={this.adoptPet}>Adopt pet</button>) : (<button className="ui disabled button">Already adopted</button>)}
        </div>
      </div>
    );
  }
}

export default Pet;
