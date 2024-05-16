import "./movie-list.css";
import MovieItem from "../movie-list-item/movie-list-item";
// import { data } from "../app/app";
// import { data } from "../app/app";

function MovieList({ data, onDelete, onProp }) {
  return (
    <ul className="movie-list ">
      {data.map((item) => (
        <MovieItem
          key={item.id}
          name={item.name}
          viewer={item.viewer}
          favourite={item.favourite}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onProp={(e) =>
            onProp(item.id, e.currentTarget.getAttribute("data-toggle"))
          }
        />
      ))}
    </ul>
  );
}

export default MovieList;
