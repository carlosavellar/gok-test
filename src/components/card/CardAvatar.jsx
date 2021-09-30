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
import style from "./CardAvatar.module.scss";
import { devWoman } from "../../assets/images";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

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
      <CardHeader
        component="div"
        sx={{ height: "6rem" }}
        className={style.header}
        avatar={
          <Button
            variant="outlined"
            className={style.button}
            onClick={goBackHandler}
          >
            <ArrowBackIosIcon className={style.icon} />
          </Button>
        }
        subheader={
          <Avatar
            className={style.avatar}
            alt="Remy Sharp"
            src={devWoman}
            sx={{ width: 56, height: 56 }}
          />
        }
      />
      <CardContent className={style.content}>
        <Typography gutterBottom variant="h5">
          Rick Bone Junior
        </Typography>
        <Typography>@rickbonejr</Typography>
        <Box>
          <ul>
            <li>
              Seguidores<strong>109</strong>
            </li>
            <li>
              Seguindo<strong>56</strong>
            </li>
            <li>
              Favoritos<strong>8</strong>
            </li>
          </ul>
        </Box>
      </CardContent>
    </Card>
  );
}
