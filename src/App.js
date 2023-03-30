import { useState, useEffect } from "react";
import "./App.css";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import TicketBooking from "./components/TicketBooking";


function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [ticketDetails, setTicketDetails] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      const data = await response.json();
      setShows(data);
    };
    fetchShows();
  }, []);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  const handleTicketBooking = () => {
    setTicketDetails({});
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setTicketDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("ticketDetails", JSON.stringify(ticketDetails));
    alert("Ticket booked successfully!");
  };
  

  return (
    <div className="App">
      {selectedShow ? (
        <ShowDetails
          show={selectedShow}
          onBack={() => setSelectedShow(null)}
          onBookTicket={handleTicketBooking}
        />
      ) : (
        <ShowList shows={shows} onSelectShow={handleShowSelect} />
      )}
      {ticketDetails ? (
        <TicketBooking
          show={selectedShow}
          ticketDetails={ticketDetails}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      ) : null}
    </div>
  );
}


export default App;
