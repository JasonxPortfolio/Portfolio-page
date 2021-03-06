import React from "react";
import { Typography, Link } from "@mui/material";

export default function SliderAnchor(props) {
  const { href, txt, num, toggleDrawer } = props;
  // When clicking a link, we want to close the sliding menu

  return (
    <Link
      href={href}
      underline="none"
      sx={styles.anchor}
      onClick={() => toggleDrawer()}
    >
      <Typography variant="span" sx={{ mr: 2, color: "white" }}>
        {num}.
      </Typography>
      <Typography variant="p" sx={{ color: "white" }}>
        {txt}
      </Typography>
    </Link>
  );
}
const styles = {
  anchor: {
    p: 2,
    pl: 0,
  },
};
