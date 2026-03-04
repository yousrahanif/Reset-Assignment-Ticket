import { Suspense, use, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import CustomerTicket from "./components/Tickets/CustomerTicket";
import ResolvedTicket from "./components/Tickets/ResolvedTicket";
import TicketStatus from "./components/Tickets/TicketStatus";

const ticketPromise = fetch("/tickets.json").then((res) => res.json());

function App() {
  const tickets = use(ticketPromise);
  const [customerTickets, setCustomerTickets] = useState(tickets);
  const [track, setTrack] = useState([]);
  const [complete, setComplete] = useState(track);
  const handleTicket = (ticket) => {
    console.log("Clicked", ticket);
    const newTrack = [...track, ticket];
    setTrack(newTrack);
    setCustomerTickets(customerTickets.filter((t) => t.id !== ticket.id));
  };
  const handleTaskStatus = (status) => {
    const newArray = [...complete, status];
    setComplete(newArray);
    console.log("clicked", status);
    setTrack(track.filter((t) => t.id !== status.id));
  };
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Hero complete={complete} track={track}></Hero>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 p-4 justify-items-center md:justify-items-start">
        <div className="md:col-span-8 ">
          <Suspense fallback={<p>Loading</p>}>
            <CustomerTicket
              setCustomerTickets={setCustomerTickets}
              customerTickets={customerTickets}
              ticketPromise={ticketPromise}
              setTrack={setTrack}
              handleTicket={handleTicket}
            ></CustomerTicket>
          </Suspense>
        </div>
        <div className="md:col-span-4 ">
          <div className="flex flex-col gap-8 ">
            <TicketStatus
              handleTaskStatus={handleTaskStatus}
              track={track}
            ></TicketStatus>
            <ResolvedTicket complete={complete}></ResolvedTicket>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
