import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

const MenuImage = ({ item }) => {
  return (
    <Link
      href={`/menu-item/${item.id}`}
      style={{ width: "100%", height: "100%", textDecoration: "none" }}
    >
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        sx={{ ":hover .menu-image": { height: "100%", } }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          bottom={0}
          className="menu-image"
          width={"100%"}
          height={"0px"}
          sx={{ transition: "0.3s ease-in-out", transformOrigin: "top" }}
          bgcolor={"white"}
          overflow={"hidden"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          padding={"0px 20px"}
          color={"black"}
        >
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            {item.name}
          </Typography>
          <Typography fontWeight={300}>{item.description}</Typography>
          <Typography fontWeight={"bold"}>
            {item.unitPrice.currency}
            {item.unitPrice.amount}
          </Typography>
          <Button variant="outlined" sx={{ alignSelf: "center" }}>
            view details
          </Button>
        </Box>
      </Box>
    </Link>
  );
};

export default MenuImage;
