import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

const HomeSection = ({
  direction = "right",
  title,
  description,
  action,
  image1,
  image2,
}) => {
  return (
    <Box minHeight={"80vh"} display={"flex"} justifyContent={"center"}>
      <Box
        width={"min(1000px, 90%)"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={direction || "row"}
        gap={"20px"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              sx={{
                typography: "secondaryFont",
                color: "primary.main",
                fontSize: "2.5rem",
                lineHeight: "30px",
              }}
            >
              Discover
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"2rem"}
              letterSpacing={"2px"}
            >
              {title}
            </Typography>
          </Box>
          <Typography textAlign={"center"} fontWeight={300}>
            {description}
          </Typography>
          <Link href={action.path}>
            <Button variant="outlined" size="large">
              {action.title}
            </Button>
          </Link>
        </Box>
        <Box width={"100%"} height={"500px"} display={"flex"} gap={"20px"}>
          <Box
            width={"100%"}
            height={"100%"}
            sx={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            width={"100%"}
            height={"100%"}
            sx={{
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSection;
