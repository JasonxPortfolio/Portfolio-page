import React from "react";
import { Box } from "@mui/material";

function PaddedBlock(props) {
  const { px, py, mt, mb } = props;
  // This will have 16px inline padding on mobile screens
  // On desktop screens, the main content will max out at 1200px (padding will still be there but not affect much)
  // The point of having a parent Box set to 100vw is so we can apply a background color across the entire viewport
  return (
    <Box sx={{ width: "calc(100vw - (100vw - 100%))" }}>
      <Box
        id="responsive_container"
        sx={{
          width: "100%",
          maxWidth: "1232px", // 1200 after padding
          margin: "auto",
          background: "#0a192f !important",
          px: px || 0,
          py: py || 0,
          mt: mt || 0,
          mb: mb || 0,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default PaddedBlock;
