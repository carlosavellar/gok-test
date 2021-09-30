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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./CardDestaques.module.scss";
import { devWoman } from "../../assets/images";
import List from "@mui/material/List";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

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
          Destaques
        </Typography>
        <Box>
          <ul>
            <li>
              <BookmarksIcon className={style.iconlist} />
              BookmarksIcon
            </li>
          </ul>
        </Box>
      </CardContent>
    </Card>
  );
}
