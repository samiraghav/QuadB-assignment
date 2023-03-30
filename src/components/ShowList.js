import React from "react";

const ShowList = ({ shows, onSelectShow }) => {
  return (
    <div className="show-list-container">
      <h1 className="show-list-heading">Shows List</h1>
      <div className="show-list">
        {shows.map((show) => (
          <div className="show-card" key={show.show.id}>
            <img
              src={show.show.image?.medium ?? "/placeholder.png"}
              alt={show.show.name}
            />
            <h2>{show.show.name}</h2>
            <p>Rating: {show.show.rating.average ?? "N/A"}</p>
            <p>Genre: {show.show.genres.join(", ")}</p>
            <p>Runtime: {show.show.runtime} min</p>
            <button onClick={() => onSelectShow(show)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
