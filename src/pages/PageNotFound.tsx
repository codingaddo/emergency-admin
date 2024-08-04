import { useNavigate } from "react-router-dom";
import FormBtn from "../ui/FormBtn";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-img">
      <div className="content flex gap-7 flex-col items-center justify-center h-[100vh]">
        <h1 className="text-lg md:text-4xl text-red-500 text-center">
          The page you are looking for could not be found 😢
        </h1>
        <FormBtn onClick={() => navigate(-1)} label="Go back" disable={false} />
      </div>
    </div>
  );
}

export default PageNotFound;
