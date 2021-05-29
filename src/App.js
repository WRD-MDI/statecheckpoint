import React, { Component } from "react";

export default class App extends Component {
  state = {
    Person: {
      fullName: "Mehdi",
      bio: "this is my biography",
      imgSrc: "/myimage.jpg",
      profession: "graphic designer",
    },
    bol: true,
    curTime: null,
  };

  tog = () => this.setState({ bol: !this.state.bol });
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>Current Time : {this.state.curTime}</p>
        <button onClick={this.tog}>{this.state.bol ? "show" : "hide"}</button>
        {this.state.bol ? (
          <div>
            <img
              className="photo"
              src={this.state.Person.imgSrc}
              alt="picture"
            ></img>
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
            <h3>{this.state.Person.profession}</h3>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}
