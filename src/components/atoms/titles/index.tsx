import { Typography } from "@mui/material";
import React, { FC } from "react";

// const Index = () => {
//   return <div></div>
// }

type SubtitleProps = {
  text: string;
};

const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return <Typography variant="h3">{text}</Typography>;
};

const SideBarTitle: FC = () => {
  return (
    <Typography sx={{ marginTop: "20px" }} align="center" variant="h4">
      MShare
    </Typography>
  );
};

export { Subtitle, SideBarTitle };
