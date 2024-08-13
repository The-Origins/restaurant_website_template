import React from "react";

export function onRenderBody({ setHeadComponents }, pluginOptions) {
  setHeadComponents([
    // Add preconnects
    <link
      key="preconnect-google"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-google-2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,

    // Add font styles
    <link
      key="google-fonts"
      href="https://fonts.googleapis.com/css2?family=Allura&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />,

    <link key="pexels-images" href="https://images.pexels.com" />,

    <title key="title">Restaurant</title>,
    <meta
      key="og:image"
      property="og:image"
      content="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />,
    <meta
      key="og:image:alt"
      property="og:image:alt"
      content="Description of your preview image"
    />,
    <meta
      key="twitter:card"
      name="twitter:card"
      content="summary_large_image"
    />,
    <meta
      key="twitter:image"
      name="twitter:image"
      content="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />,
    <meta
      key="description"
      name="description"
      content="A restaurant website template"
    />,
    <meta
      key="keywords"
      name="keywords"
      content="restaurant, website, food, drinks"
    />,
    <meta key="author" name="author" content="Wega Studios" />,
  ]);
}
