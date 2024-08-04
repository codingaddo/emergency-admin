import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import Complaints from "./pages/Complaints";
import Stat from "./pages/Stat";
import Settings from "./pages/Settings";
import AddAgents from "./pages/AddAgents";
import AllAgents from "./pages/AllAgents";
import UserDetails from "./pages/UserDetails";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to={"dashboard"} />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="complaints" element={<Complaints />} />
              <Route path="stat" element={<Stat />} />
              <Route path="settings" element={<Settings />}>
                <Route index element={<Navigate replace to={"all-agents"} />} />
                <Route path="all-agents" element={<AllAgents />} />
                <Route path="add-agent" element={<AddAgents />} />
                <Route path="user-details/:userId" element={<UserDetails />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
