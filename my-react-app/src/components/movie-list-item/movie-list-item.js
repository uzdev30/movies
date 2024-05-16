// import { Component } from "react";
import "./movie-list-item.css";

const MovieItem = (props) => {
  const { name, viewer, onDelete, onProp, favourite, like } = props;

  return (
    <li
      className={` list-group-item d-flex justify-content-between ${
        favourite && `favourite`
      } ${like && `like`}`}
    >
      <span
        onClick={onProp}
        className="list-group-item-label"
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={viewer}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onProp}
          data-toggle="favourite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i onClick={onDelete} className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default MovieItem;
