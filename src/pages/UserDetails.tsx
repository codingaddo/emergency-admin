import { useLocation } from "react-router-dom";
import UserDetails from "../components/UserDetail";

const UserDetail = () => {
  const { state } = useLocation();
  const { agent } = state || {};
  const { imageUrl, name, phone, email, role } = agent;
  console.log(agent);
  return (
    <div>
      <UserDetails
        name={name}
        phone={phone}
        email={email}
        imageUrl={imageUrl}
        role={role}
      />
    </div>
  );
};

export default UserDetail;
