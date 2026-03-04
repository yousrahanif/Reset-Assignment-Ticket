const TicketStatus = () => {
  return (
    <div>
      <p className="text-xl font-semibold ">Task Status</p>

      <div className="card-body card w-96 bg-base-100 card-sm shadow-sm mt-4">
        <h2 className="card-title">Small Card</h2>

        <div className="justify-end card-actions">
          <button className="btn bg-[#02A53B] w-full">Complete</button>
        </div>
      </div>
    </div>
  );
};

export default TicketStatus;
