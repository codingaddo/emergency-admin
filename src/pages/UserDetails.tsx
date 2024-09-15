import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const { state } = useLocation();
  const { agent } = state || {};
  console.log(agent);
  return (
    <div>
      <div>
        <p>{agent.name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
