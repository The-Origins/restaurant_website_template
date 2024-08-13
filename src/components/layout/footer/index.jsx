import {
  Box,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import FooterLink from "./link";
import { Copyright, Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "30px 0px",
      }}
    >
      <Link href="/" sx={{ color: "black", textDecoration: "none" }}>
        <Typography
          variant="h1"
          sx={{
            textTransform: "capitalize",
            fontSize: "clamp(1rem, 20vw, 2rem)",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {theme.title}
        </Typography>
      </Link>
      <Typography
        fontWeight={"light"}
        color={"white"}
        width={"min(800px, 90%)"}
        textAlign={"center"}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum optio,
        quibusdam rem quidem sint ullam repellendus qui aliquid, voluptas
        perspiciatis accusamus obcaecati eos excepturi similique, assumenda
        nostrum quas adipisci. Reprehenderit?
      </Typography>
      <Link href="/make-a-reservation">
        <Button disableElevation variant="contained">
          Make a reservation
        </Button>
      </Link>
      <Box display={"flex"} gap={isNotPhone ? "20px" : "10px"}>
        <FooterLink path="/">Home</FooterLink>
        <FooterLink path="/about">About</FooterLink>
        <FooterLink path="/menu">Menu</FooterLink>
        <FooterLink path="/shop">Shop</FooterLink>
        <FooterLink>Contact us</FooterLink>
      </Box>
      <Box display={"flex"} gap={isNotPhone ? "20px" : "10px"}>
        <FooterLink path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/">
          <Twitter />
        </FooterLink>
        <FooterLink path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/">
          <Instagram />
        </FooterLink>
        <FooterLink path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/">
          <Facebook />
        </FooterLink>
      </Box>
      <Box sx={{ width: "100%", height: "1px", bgcolor: "white" }} />
      <FooterLink path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/">
        <Typography
          fontSize={"0.7rem"}
          display={"flex"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Copyright sx={{ fontSize: "1rem" }} />
          Copyright Wega Studios | All rights reserved
        </Typography>
      </FooterLink>
    </footer>
  );
};

export default Footer;
