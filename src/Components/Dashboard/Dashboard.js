import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AuthContext } from "../../AuthContext/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
