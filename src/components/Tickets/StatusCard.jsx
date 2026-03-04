const StatusCard = ({ t, handleTaskStatus }) => {
  return (
    <div>
      <div className="card-body card w-96 bg-base-100 card-sm shadow-sm mt-4">
        <h2 className="card-title">{t.title}</h2>

        <div className="justify-end card-actions">
          <button
            onClick={() => handleTaskStatus(t)}
            className="btn bg-[#02A53B] w-full"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
