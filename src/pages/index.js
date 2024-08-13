import React from "react";
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import HomeSection from "../components/home/section";
import MenuImage from "../components/home/menuImage";
import { Place } from "@mui/icons-material";

export default function Home() {
  const theme = useTheme();

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        width={"100%"}
        height={"100vh"}
        position={"relative"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        color={"white"}
      >
        <Box
          zIndex={-1}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.8)",
          }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Typography
            variant="h2"
            sx={{
              typography: "secondaryFont",
              fontSize: "clamp(2.5rem, 20vw, 5rem)",
              color: "primary.main",
            }}
          >
            Welcome
          </Typography>
          <Typography
            variant="h1"
            fontWeight={"bold"}
            fontSize={"clamp(1.5rem, 20vw, 3rem)"}
          >
            THE RESTAURANT
          </Typography>
          <Box
            width={"100%"}
            position={"relative"}
            height={"1px"}
            bgcolor={"white"}
          >
            <Box
              width={"10px"}
              height={"10px"}
              bgcolor={"white"}
              position={"absolute"}
              right={"100%"}
              top={-4.2}
              sx={{ transform: "rotate(-45deg)" }}
            />
            <Box
              width={"10px"}
              height={"10px"}
              bgcolor={"white"}
              position={"absolute"}
              left={"100%"}
              top={-4.2}
              sx={{ transform: "rotate(-45deg)" }}
            />
          </Box>
        </Box>
        <Typography fontWeight={"lighter"} fontSize={"1.4rem"}>
          The destination you're looking for
        </Typography>
        <Box padding={"20px"}>
          <Link href={"/make-a-reservation"}>
            <Button
              variant="contained"
              size="large"
              sx={{
                fontSize: "1rem",
                bgcolor: "white",
                color: "black",
                ":hover": { bgcolor: theme.palette.grey[300] },
              }}
            >
              Make a Reservation
            </Button>
          </Link>
        </Box>
      </Box>
      <HomeSection
        direction="right"
        title={"About us"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        action={{ title: "About us", path: "/about" }}
        image1={
          "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress"
        }
        image2={
          "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress"
        }
      />
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"90%"} height={"80%"} display={"flex"} gap={"10px"}>
          <MenuImage
            item={{
              id: "1",
              image:
                "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              name: "Chicken Sandwich",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
              unitPrice: { currency: "$", amount: "10" },
            }}
          />
          <MenuImage
            item={{
              id: "2",
              image:
                "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              name: "Beef Bacon Burger",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
              unitPrice: { currency: "$", amount: "20" },
            }}
          />
          <MenuImage
            item={{
              id: "3",
              image:
                "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              name: "Chicken Skewers",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
              unitPrice: { currency: "$", amount: "12" },
            }}
          />
        </Box>
      </Box>
      <HomeSection
      direction="row-reverse"
        title={"Our Menu"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        action={{ title: "View Menu", path: "/menu" }}
        image1={
          "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress"
        }
        image2={
          "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress"
        }
      />
      <Box
        height={"60vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Box
          zIndex={-1}
          position={"absolute"}
          width={"100%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${"https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.8)",
          }}
        />
        <Box
          width={"min(700px, 90%)"}
          height={"80%"}
          bgcolor={`rgba( 255 255 255 / 0.9)`}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"30px"}
        >
          <Typography
            sx={{
              typography: "secondaryFont",
              color: "primary.main",
              fontSize: "3rem",
              lineHeight: "40px",
            }}
          >
            Where to find us
          </Typography>
          <Typography fontWeight={300}>
            <Place sx={{ color: "primary.main" }} /> Our Address, Our Street,
            Our City
          </Typography>
          <Button disableElevation variant="contained">
            Go to Location
          </Button>
        </Box>
      </Box>
      <HomeSection
        title={"Our Shop"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        action={{ title: "View Shop", path: "/shop" }}
        image1={
          "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress"
        }
        image2={
          "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress"
        }
      />
    </Box>
  );
}
