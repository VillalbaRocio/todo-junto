import { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    console.log("props de PersonCard", props.person);
    const { firstName, lastName, age, hairColor } = props.person;
    this.state = {
      firstName,
      lastName,
      age,
      hairColor,
    };
  }

  aumentarEdad = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <h1>
        {this.state.lastName} {this.state.firstName} 
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.state.hairColor}</p>
        <button onClick={this.aumentarEdad}>Birthday Button for</button>
      </div>
    );
  }
}

export default PersonCard;
