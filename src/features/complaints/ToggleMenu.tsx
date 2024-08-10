import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleShow } from "../slices/modalSlice";
import { BiAlignLeft } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";

const ToggleMenu = () => {
  const isShow = useSelector((state: RootState) => state.modal.isShow);
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleShow());
  return (
    <button onClick={toggle} className="p-1">
      {!isShow ? (
        <BiAlignLeft size={25} color="#021b34" />
      ) : (
        <IoMdCloseCircle size={25} color="#021b34" />
      )}
    </button>
  );
};

export default ToggleMenu;
