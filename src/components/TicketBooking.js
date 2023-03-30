import React from "react";

const TicketBooking = ({ show, ticketDetails, onInputChange, onSubmit }) => {
    const defaultMovieName = show.show.name;
    return (
        <div className="ticket-booking">
            <h1>Book Tickets for {defaultMovieName}</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="movie-name">Movie Name:</label>
                <input
                    id="movie-name"
                    type="text"
                    value={defaultMovieName}
                    disabled />
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={ticketDetails?.name ?? ""}
                    onChange={onInputChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={ticketDetails?.email ?? ""}
                    onChange={onInputChange}
                    required
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    value={ticketDetails?.phone ?? ""}
                    onChange={onInputChange}
                    maxLength="10"
                    required
                />

                <label htmlFor="numberOfTickets">Number of Tickets:</label>
                <input
                    type="number"
                    id="numberOfTickets"
                    value={ticketDetails?.numberOfTickets ?? ""}
                    onChange={onInputChange}
                    min={1}
                    required
                />

                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default TicketBooking;


