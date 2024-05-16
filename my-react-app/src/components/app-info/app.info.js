import "./app-info.css";

import React from "react";

const InfoApp = ({ allMoviesCount, favouriteMovise }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-upppercase">
        Barcha kinolar soni:{allMoviesCount}
      </p>
      <p className="fs-4 text-upppercase">Sevimli kinolar:{favouriteMovise} </p>
    </div>
  );
};

export default InfoApp;
