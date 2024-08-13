import { Link, useMediaQuery } from "@mui/material";
import React from "react";

const FooterLink = ({ path, children }) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  return (
    <Link
      href={path}
      sx={{
        color: "white",
        textDecoration: "none",
        fontWeight: "lighter",
        ":hover": { color: "primary.main" },
        fontSize: "clamp(0.8rem, 10vw, 1rem)",
        letterSpacing: isNotPhone ? "1px" : "0.5px",
      }}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
