import { FaCircleUser } from "react-icons/fa6";
interface UserInterface {
  userName: string;
}

const UserCard = ({ userName }: UserInterface) => {
  return (
    <div className="flex items-center gap-5 p-5 w-full hover:shadow-md rounded-md bg-slate-50 shadow">
      <div className="p-2 bg-blue-950 rounded-full">
        <FaCircleUser size={15} color="white" />
      </div>
      <h2>{userName}</h2>
    </div>
  );
};

export default UserCard;
