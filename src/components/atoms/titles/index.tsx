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

const AuthTitle: FC = () => {
  return (
    <Typography sx={{ marginTop: "50px" }} align="center" variant="h2">
      MShare へようこそ
    </Typography>
  );
};

export { Subtitle, SideBarTitle, AuthTitle };
