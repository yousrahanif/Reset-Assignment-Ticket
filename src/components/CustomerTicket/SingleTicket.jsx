const SingleTicket = () => {
  return (
    <div className="px-4">
      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <div className="card-body ">
          <div className="flex justify-between">
            <h2 className="">Xsmall Card</h2>
            <button className="btn btn-xs rounded-3xl">Open</button>
          </div>

          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex justify-between gap-2">
            <div className="flex justify-between">
              <p>#1001</p>
              <p>High Priotity</p>
            </div>
            <div className="flex justify-between gap-2">
              <p>Michale Brown</p>
              <p>Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
