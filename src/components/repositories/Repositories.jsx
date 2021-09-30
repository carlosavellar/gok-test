/** @format */

import { logoHitHub } from "../../assets/images";
import BorderBox from "../UI/BorderBox";
import { CardHeader, Grid, Box } from "@mui/material";
import CardAvatar from "../card/CardAvatar";
import CardSobre from "../card/CardSobre";
import CardDestaques from "../card/CardDestaques";
import FormSearchRepository from "../FormSearchRepository/FormSearchRepository";
import Repository from "./Repository";
import style from "./Repositories.module.scss";
import Header from "../UI/header/Header";

const Repositorios = (props) => {
  return (
    <BorderBox>
      <Header />
      <Grid className={style.paddingBorder} container>
        <Grid xl={3}>
          <Grid item className={style.warpCard}>
            <CardAvatar />
          </Grid>
          <Grid className={style.warpCard}>
            <CardSobre />
          </Grid>
          <Grid className={style.warpCard}>
            <CardDestaques />
          </Grid>
        </Grid>
        <Grid xl={9} className={style.gridContent}>
          <Grid xl={12}>
            <FormSearchRepository />
          </Grid>
          <Grid xl={12}>
            <Box>
              <Repository />
              <Repository />
              <Repository />
              <Repository />
              <Repository />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </BorderBox>
  );
};

export default Repositorios;
