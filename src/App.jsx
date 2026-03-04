import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import CustomerTicket from "./components/Tickets/CustomerTicket";
import ResolvedTicket from "./components/Tickets/ResolvedTicket";
import TicketStatus from "./components/Tickets/TicketStatus";

const ticketPromise = fetch("/tickets.json").then((res) => res.json());

function App() {
  const [track, setTrack] = useState([]);
  const handleTicket = (ticket) => {
    console.log("Clicked", ticket);
    const newTrack = [...track, ticket];
    setTrack(newTrack);
  };
  return (
    <div className="w-10/12 mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="grid grid-cols-12 gap-2 p-4">
        <div className="col-span-8">
          <Suspense fallback={<p>Loading</p>}>
            <CustomerTicket
              ticketPromise={ticketPromise}
              setTrack={setTrack}
              handleTicket={handleTicket}
            ></CustomerTicket>
          </Suspense>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col gap-8">
            <TicketStatus></TicketStatus>
            <ResolvedTicket></ResolvedTicket>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
