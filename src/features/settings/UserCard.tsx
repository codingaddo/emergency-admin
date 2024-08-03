import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";

interface UserInterface {
  userName: string;
}

const UserCard = ({ userName }: UserInterface) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className=" relative flex items-center gap-5 justify-between py-4 px-5 w-full hover:shadow-md rounded-md bg-slate-50 shadow">
      <div className="flex items-center gap-5">
        <div className="p-2 bg-blue-950 rounded-full">
          <FaCircleUser size={15} color="white" />
        </div>
        <h2>{userName}</h2>
      </div>
      <div
        className="p-1 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        <HiDotsVertical />
      </div>
      {show && (
        <div className=" z-50 absolute right-20 top flex flex-col gap-5 bg-[#f1f1f1] rounded-lg shadow-lg px-10 py-5">
          <div className="flex items-center cursor-pointer">
            <MdOutlineEdit />
            <span>Edit</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <MdDelete />
            <span>Del</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
