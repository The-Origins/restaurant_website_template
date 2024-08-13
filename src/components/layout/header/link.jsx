import { Box, Link, Typography } from "@mui/material";
import React from "react";

const HeaderLink = ({ path, children }) => {
  return (
    <Link
      href={path}
      sx={{
        color: "inherit",
        "--parent-color": "currentColor",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        ":hover .header-link-border": { width: "100%" },
      }}
    >
      <Typography
        fontSize={"1.2rem"}
        fontWeight={"lighter"}
        letterSpacing={"1px"}
      >
        {children}
      </Typography>
      <Box
        className={"header-link-border"}
        height={"1px"}
        width={"0px"}
        bgcolor={"var(--parent-color)"}
        sx={{ transition: "0.2s" }}
      />
    </Link>
  );
};

export default HeaderLink;
