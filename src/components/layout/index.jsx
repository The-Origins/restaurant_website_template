import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../state/user";
import { fetchSession } from "../../state/session";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchSession());
  }, []);

  return (
    <Box>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
