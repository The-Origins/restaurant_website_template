import { Box } from "@mui/material";
import React from "react";

const UserPage = ({ location }) => {
  const [currentPath] = location.pathname.split("/").slice(2);

  return <Box>{currentPath}</Box>;
};

export default UserPage;
