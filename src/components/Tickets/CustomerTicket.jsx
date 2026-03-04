import { use } from "react";
import SingleTicket from "./SingleTicket";
const CustomerTicket = ({ ticketPromise, handleTicket }) => {
  const ticket = use(ticketPromise);

  return (
    <div>
      <p className="text-xl font-semibold">Customer Tickets</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ticket.map((t) => (
          <SingleTicket
            key={t.id}
            t={t}
            handleTicket={handleTicket}
          ></SingleTicket>
        ))}
      </div>
    </div>
  );
};

export default CustomerTicket;
