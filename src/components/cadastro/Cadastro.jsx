/** @format */

import React from "react";
import styles from "./Cadastro.module.scss";
import BorderBox from "../UI/BorderBox";
import {
  Grid,
  TextField,
  Avatar,
  FormGroup,
  styled,
  Paper,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";

import { Illustration, logoHitHub } from "./../../assets/images";
console.log(Illustration);
// import logo from "./../../assets/logo-git-hub.svg";
// import * as image from "./../../assets/images/";
// import useStyles from "../../assets/styles.js";
// import { Box } from "@material-ui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Cadastro = (props) => {
  return (
    <BorderBox>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={styles.register}
          sx={{ background: "#ffffff" }}
        >
          <Item className={styles.item}>
            <Grid item xl={10} className={styles.wrapForm}>
              <img src={logoHitHub} alt="Logo" className={styles.logo} />
              <Typography variant="h4">Buscar usuário</Typography>
              <Typography>
                Crie sua conta através do seu usuário do GitHub
              </Typography>
              <FormGroup>
                <TextField
                  className={styles.inputText}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="@username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Avatar
                          className={styles.avatar}
                          src="/broken-image.jpg"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  className={styles.button}
                  sx={{ bgcolor: "black", color: "#ffffff" }}
                  variant="cadastrar"
                >
                  Cadastrar
                </Button>
              </FormGroup>
              <Grid className={styles.terms} xl={12}>
                Termos de <span>política</span> e <span>privacidade</span>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          sx={{ bgcolor: "black" }}
          className={styles.rightContainer}
        >
          <img
            src={Illustration}
            className={styles.illustration}
            alt="illustration"
          />
          <h3>
            Gerencie e adicione <strong>tags</strong> ao seus{" "}
            <strong>repositórios </strong>
            favoritos.
          </h3>
        </Grid>
      </Grid>
    </BorderBox>
  );
};

export default Cadastro;
