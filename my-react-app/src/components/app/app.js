import { v4 as uuidv4 } from "uuid";
import "./app.css";

import { Component } from "react";
import Search from "../search-panel/search-panel";
import AppFilter from "../app-fillter/app-filter";
import InfoApp from "../app-info/app.info.js";
import MovieList from "../movie-list/movie-list.js";
import AddMovie from "../movie-add/movie-add.js";
import Counter from "../counter/counter.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "172days", viewer: 121, favourite: true, like: false, id: 1 },
        { name: "Empire of Osman", viewer: 32, favourite: 0, like: 0, id: 2 },
        {
          name: "Mendirman Jaloliddin",
          viewer: 22,
          favourite: 0,
          like: 0,
          id: 3,
        },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewer: item.viewer,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onProp = (id, prop) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return { data: newArr };
    });
  };

  render() {
    const { data } = this.state;
    const allMoviesCount = data.length;
    const favouriteMovise = data.filter((c) => c.favourite).length;
    return (
      <div className="app font-monospace">
        <div className="content">
          <InfoApp
            allMoviesCount={allMoviesCount}
            favouriteMovise={favouriteMovise}
          />

          <div className="search-panel">
            <Search />

            <AppFilter />
          </div>
          <div>
            <MovieList
              onProp={this.onProp}
              data={data}
              onDelete={this.onDelete}
            />
          </div>
          <div>
            <AddMovie addForm={this.addForm} />
          </div>
        </div>
        <div className="counter">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
