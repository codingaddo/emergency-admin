import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ComplainPreview from "../features/complaints/ComplainPreview";

const ComplainDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-5">
      <div className="flex items-center justify-between  py-4">
        <h2 className="text-lg text-blue-950 font-semibold">Report details</h2>
        <span className="p-1 bg-blue-100 rounded-lg">
          <IoMdArrowBack
            size={25}
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </span>
      </div>
      <div>
        <ComplainPreview />
      </div>
    </div>
  );
};

export default ComplainDetails;
