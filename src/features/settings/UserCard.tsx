import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
interface UserCardProps {
  userName: string;
  onEdit: () => void;
  onDelete: () => void;
}

const UserCard = ({ userName, onDelete, onEdit }: UserCardProps) => {
  return (
    <>
      <div className="user hover:bg-gray-100 flex items-center gap-5 justify-between py-4 px-5 w-full hover:shadow-md rounded-md bg-slate-50 shadow">
        <div className="flex items-center gap-5">
          <div className="p-2 bg-blue-950 rounded-full">
            <FaCircleUser size={15} color="white" />
          </div>
          <h2>{userName}</h2>
        </div>

        <div className="flex gap-2 sm:gap-4 py-2">
          <NavLink
            to={`/settings/user-details/${11}`}
            className="flex items-center cursor-pointer"
            title="details"
          >
            <IoMdMenu size={20} />
          </NavLink>
          <span
            className="flex items-center cursor-pointer"
            onClick={onEdit}
            title="Edit"
          >
            <MdOutlineEdit size={14} />
          </span>
          <span
            className="flex items-center cursor-pointer"
            onClick={onDelete}
            title="Delete"
          >
            <MdDelete size={14} />
          </span>
        </div>
      </div>
    </>
  );
};

export default UserCard;
