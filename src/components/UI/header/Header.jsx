/** @format */

import { Grid, Box } from "@material-ui/core";
import { logoHitHub } from "./../../../assets/images";
import styles from "./Header.module.scss";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <Grid container>
        <Box gridColumn="span 4" sx={{ p: 2, pl: 5 }}>
          <img src={logoHitHub} alt="Logo" className={styles.logo} />
        </Box>
      </Grid>
    </header>
  );
};

export default Header;
