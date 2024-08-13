import { createTheme } from "@mui/material";

const theme = createTheme({
  title: "Restaurant",
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    secondaryFont: {
      fontFamily: "Allura, sans-serif",
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
  },
  palette: {
    primary: { main: "#C3A84E" },
    status: {
      product: {
        "In stock": "#707070",
        "Few left": "#FF9000",
        "Out of stock": "#FF0000",
        other: "#FF0000",
      },
      order: {
        processing: "#0382FF",
        fulfilling: "#FF9000",
        fulfilled: "#15FF02",
      },
      payment: {
        paid: "#15FF02",
        failed: "#FF0000",
        pending: "#FF9000",
      },
      delivery: {
        pending: "#FF9000",
        delivered: "#15FF02",
        failed: "#FF0000",
      },
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained",},
          style: {
            color: "#FFFF",
            textTransform: "none",
            fontWeight: 300,
            letterSpacing: "1px",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            ":hover": { color: "#FFFF", backgroundColor: "#C3A84E" },
          },
        },
      ],
    },
  },
});

export const convertHex = (hex) => {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
};

export default theme;
