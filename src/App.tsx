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
import ComplainDetails from "./pages/ComplainDetails";
import { Toaster } from "react-hot-toast";
import { requestNotificationPermission } from "./features/complaints/notification";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);
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
              <Route path="help" element={<Stat />} />

              <Route path="complaints" element={<Complaints />}>
                <Route index element={<Navigate replace to={"complaints"} />} />
                <Route path="complaints" element={<Complaints />} />
                <Route
                  path="report-details/:reportId"
                  element={<ComplainDetails />}
                />
              </Route>

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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 4000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
