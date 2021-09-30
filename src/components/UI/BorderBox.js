/** @format */
import { Grid, Container } from "@material-ui/core";
import classes from "./BorderBox.module.scss";

const BorderBox = (props) => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={0}
        // align="center"
        justify="center"
        style={{ backgroundColor: "#fff" }}
        className={classes.borderRadius}
      >
        {props.children}
      </Grid>
    </Container>
  );
};

export default BorderBox;
