import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ComplainDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-lg text-blue-950">Report details</h2>
        <span className="p-1 bg-blue-100 rounded-lg">
          <IoMdArrowBack
            size={25}
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </span>
      </div>
    </div>
  );
};

export default ComplainDetails;
