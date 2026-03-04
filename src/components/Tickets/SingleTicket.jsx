import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleTicket = ({ t, handleTicket }) => {
  return (
    <div onClick={() => handleTicket(t)} className="py-4 ">
      <div className="card w-96 bg-base-100 card-md h-42.5 shadow-sm">
        <div className="card-body ">
          <div className="flex justify-between">
            <h2 className="text-black text-xl">{t.title}</h2>
            {/* <button
              className={
                
                
                
                
                
                `btn btn-xs rounded-3xl ${
                            t.status==="Open"?"bg-[#B9F8CF]" :t.status==="In Progress"? "bg-[#B9F8CF]" : t.status==="Resolved"? "bg-[#B9F8CF]:"
              }
`}
            > */}
            <button
              className={`btn btn-xs rounded-3xl  ${t.status === "Open" ? "bg-[#B9F8CF]" : t.status === "In Progress" ? "bg-[#F8F3B9]" : ""}`}
            >
              {t.status}
            </button>
          </div>

          <p className="text-[#627382]">{t.description}</p>
          <div className="flex justify-between ">
            <div className="flex justify-between gap-2 ">
              <p className="text-[#627382]">#{t.id}</p>
              <p
                className={
                  t.priority === "High"
                    ? "text-red-500"
                    : t.priority === "Medium"
                      ? "text-yellow-500"
                      : t.priority === "Low"
                        ? "text-green-500"
                        : ""
                }
              >
                {t.priority.toUpperCase()}
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <p className="text-[#627382]">{t.customer}</p>
              <p className="text-[#627382]">
                {" "}
                <FontAwesomeIcon icon={faCalendar} className="" />
                {t.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
