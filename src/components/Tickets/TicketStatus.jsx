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
          <p className="  ">No In Progress Task Yet</p>
        )}
      </div>
    </div>
  );
};

export default TicketStatus;
