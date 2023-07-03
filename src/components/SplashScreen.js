import React from "react";
import "animate.css";
import { Grid } from "@material-ui/core";

function SplashScreen() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        color: "#00360C",
        backgroundColor: "#91D19F",
        height: "100vh", // Set height to 100% of viewport height
        width: "100vw", // Set width to 100% of viewport width
      }}
    >
      <h1 class="animate__animated animate__zoomInLeft">Todo App 🚀</h1>
    </Grid>
  );
}

export default SplashScreen;
