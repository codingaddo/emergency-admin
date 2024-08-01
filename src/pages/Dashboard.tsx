import Container from "../features/dashboard/Container";

const Dashboard = () => {
  return (
    <div className="py-3 px-10">
      <h2>Dashboard</h2>
      <div className="flex justify-between items-center px-10">
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
    </div>
  );
};

export default Dashboard;
