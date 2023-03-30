import React from "react";

const ShowDetails = ({ show, onBack, onBookTicket }) => {
  const {
    name,
    image,
    summary,
    premiered,
    type,
    language,
    schedule,
    officialSite,
    network,
  } = show.show;

  const cleanedSummary = summary.replace(/(<p>|<\/p>|<b>|<\/b>)/g, "");

  return (
    <div className="show-details">
      <img
        className="image-style"
        src={image?.medium ?? "/placeholder.png"}
        alt={name}
      />
      <div>
        <h1>Name: {name}</h1>
        <p>Premiered: {premiered}</p>
        <p>Type: {type}</p>
        <p>Language: {language}</p>
        <p>
          Schedule: {schedule?.days.join(", ")} at {schedule?.time}
        </p>

        <p>
          Official Site:{" "}
          <a href={officialSite} target="_blank" rel="noopener noreferrer">
            {officialSite}
          </a>
        </p>

        <p>Network: {network?.name}</p>

        <details>
          <summary>Summary</summary>
          <p>{cleanedSummary}</p>
        </details>
        <div className="button-container">
          <button className="book-ticket-button" onClick={onBack}>
            Back to List
          </button>
          <button className="book-ticket-button" onClick={onBookTicket}>
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
