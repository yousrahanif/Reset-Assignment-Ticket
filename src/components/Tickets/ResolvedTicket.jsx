const ResolvedTicket = ({ complete }) => {
  return (
    <div>
      <p className="text-xl font-semibold">Resolved Task</p>

      {}

      {/* {complete.map((t) => (
        <div key={t.id}>
          <div className="  w-96 bg-base-100 card-sm  mt-4">
            <div className="justify-end card-actions">
              <button className="btn bg-[#E0E7FF] w-full">{t.title}</button>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ResolvedTicket;
