import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex-nowrap overflow-x-auto">
      <div className="flex-1 ">
        <a className="btn btn-ghost font-semibold  whitespace-nowrap text-[20px]">
          CS - Ticket System
        </a>
      </div>
      <div className="flex-none items-center">
        <ul className="menu menu-horizontal px-0.5">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <button className="btn btn-sm p-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white ">
            <FontAwesomeIcon icon={faPlus} className="" />
            New Ticket
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
