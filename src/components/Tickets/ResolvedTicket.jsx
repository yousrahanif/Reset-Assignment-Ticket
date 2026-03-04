const ResolvedTicket = () => {
  return (
    <div>
      <p className="text-xl font-semibold">Resolved Task</p>

      <div>
        <div className="  w-96 bg-base-100 card-sm  mt-4">
          <div className="justify-end card-actions">
            <button className="btn bg-[#E0E7FF] w-full">Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResolvedTicket;
