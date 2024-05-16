import { Component } from "react";
import "./movie-add.css";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewer: "",
    };
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormhandle = (e) => {
    e.preventDefault();
    this.props.addForm({ name: this.state.name, viewer: this.state.viewer });
    this.setState({
      name: "",
      viewer: "",
    });
  };

  render() {
    const { name, viewer } = this.state;

    return (
      <div className="wrapp">
        <div>
          <h3>Yangi kino qo'shish</h3>
        </div>
        <form className="add-form d-flex" onSubmit={this.addFormhandle}>
          <input
            onChange={this.changeInput}
            className="addInput"
            type="text"
            placeholder="Qanday kino"
            name="name"
            value={name}
          />
          <input
            onChange={this.changeInput}
            className="addInput"
            type="text"
            placeholder="Nechi marotaba ko'rilgan"
            name="viewer"
            value={viewer}
          />
          <button type="submit" className="btn btn-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
