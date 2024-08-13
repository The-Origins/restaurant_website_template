import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import HeaderLink from "./link";
import { LocalMall } from "@mui/icons-material";

const Header = () => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const isNotExeption = !["/"].includes(window.location.pathname);
  const [scroll, setScroll] = useState(window.scrollY);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [headerRef]);

  return (
    <>
      <header
        ref={headerRef}
        style={{
          zIndex: 2,
          position: "fixed",
          width: "100%",
          top: 0,
          overflow: "hidden",
          color: isNotExeption || scroll > 100 ? "black" : "white",
          boxShadow:
            isNotExeption || scroll > 100
              ? `0px 0px 10px 0px ${theme.palette.grey[400]}`
              : undefined,
        }}
      >
        <Box
          position={"absolute"}
          width={"100%"}
          height={"100%"}
          bgcolor={"white"}
          sx={{
            transition: "0.2s",
            opacity: isNotExeption || scroll > 100 ? 0.85 : 0,
          }}
          zIndex={-1}
        />
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            width={isNotPhone ? "80%" : "90%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"20px 0px"}
          >
            <Link
              href="/"
              sx={{
                color: "inherit",
                "--parent-color": "currentColor",
                textDecoration: "none",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "clamp(1rem, 20vw, 2rem)",
                  fontWeight: "bold",
                  color: "iniherit",
                }}
              >
                {theme.title}
              </Typography>
              <Box
                height={"4px"}
                width={"100%"}
                bgcolor={"var(--parent-color)"}
              />
            </Link>
            <Box display={"flex"} gap={"20px"}>
              <HeaderLink path={"/"}>Home</HeaderLink>
              <HeaderLink path={"/about"}>About</HeaderLink>
              <HeaderLink path={"/menu"}>Menu</HeaderLink>
              <HeaderLink>Contact</HeaderLink>
              <HeaderLink path={"/shop"}>
                <>
                  <LocalMall sx={{ fontSize: "1rem", margin: "0px" }} /> Shop
                </>
              </HeaderLink>
            </Box>
          </Box>
        </Box>
      </header>
      {isNotExeption && <Box width={"100%"} height={`${headerHeight}px`} />}
    </>
  );
};

export default Header;
