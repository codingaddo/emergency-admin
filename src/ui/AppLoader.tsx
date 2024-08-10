const AppLoader = () => {
  return (
    <div className="bg-img">
      <div className="content">
        <div>
          <div className="spinner"></div>
          <h1 className="text-3xl font-medium text-red-50 animate-pulse">
            Authenticating . . .
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AppLoader;
