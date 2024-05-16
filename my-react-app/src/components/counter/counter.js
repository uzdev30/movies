import "./counter.css";

import { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, text: "matn", id: 1 };
  }
  clickhandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  clickhandle = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  changehandle = (e, name) => {
    console.log("plk");

    console.log(name);
  };

  reload = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <div className="container border ">
        <div className="mb-3 border">
          <button
            onClick={this.clickhandler}
            className="btn btn-success text-center"
          >
            Decrement
          </button>
          <button
            onClick={this.clickhandle}
            className="btn btn-danger text-center mx-2 "
          >
            Increment
          </button>
          <button onClick={this.reload} className="btn btn-info  ">
            Restart
          </button>
          <p className=" text-start">{this.state.counter}</p>
        </div>
        <form>
          <label htmlFor="">Yoshingiz</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.changehandle(e, "Nur")}
          />
        </form>
      </div>
    );
  }
}

export default Counter;
