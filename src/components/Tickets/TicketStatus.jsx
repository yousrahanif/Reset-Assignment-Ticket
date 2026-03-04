import StatusCard from "./StatusCard";

const TicketStatus = ({ track, handleTaskStatus }) => {
  return (
    <div>
      <p className="text-xl font-semibold">Task Status</p>
      <div>
        {track.length > 0 ? (
          track.map((t) => (
            <StatusCard
              key={t.id}
              t={t}
              handleTaskStatus={handleTaskStatus}
            ></StatusCard>
          ))
        ) : (
          <p className=" font-semibold text-red-500">No Tasks yet</p>
        )}
      </div>
    </div>
  );
};

export default TicketStatus;
