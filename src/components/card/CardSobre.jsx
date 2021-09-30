/** @format */

import * as React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Button,
  Typography,
  IconButton,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import style from "./CardSobre.module.scss";

import DomainIcon from "@mui/icons-material/Domain";
import RoomIcon from "@mui/icons-material/Room";
import LinkIcon from "@mui/icons-material/Link";
export default function ImgMediaCard() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const goBackHandler = () => {
    console.log("w");
  };

  return (
    <Card sx={{ boxShadow: 3 }} className={style.userCard}>
      <CardContent className={style.content}>
        <Typography gutterBottom variant="h5">
          Sobre
        </Typography>
        <Typography paragraph={true} className={style.paragraph}>
          Desenvolvedor Javascript - React, React Native, Vue, TypeScript,
          GraphQL, Redux, NodeJS
        </Typography>
        <Box>
          <ul>
            <li>
              <DomainIcon className={style.iconlist} />
              GO.K Digital
            </li>
            <li>
              <RoomIcon className={style.iconlist} />
              São Paulo, Brazil
            </li>
            <li>
              <LinkIcon className={style.iconlist} />
              rickbonejr.com.br
            </li>
          </ul>
        </Box>
      </CardContent>
    </Card>
  );
}
