/** @format */
import { Grid, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import style from "./Repository.module.scss";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Repository = (props) => {
  return (
    <Box className={style.boxRepo}>
      <Grid>
        <Typography variant="h5" gutterBottom>
          project-name-java <ArrowForwardIosIcon className={style.icoTitle} />
        </Typography>
        <Typography variant="p" gutterBottom>
          Project application with component animations with React Native
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            className={style.button}
            endIcon={<ControlPointIcon />}
          >
            Adicionar tags
          </Button>
        </Stack>
      </Grid>
      <Typography variant="small" className={style.tags}>
        <LanguageIcon className={style.detIcon} /> React Native{" "}
        <AccessTimeIcon className={style.detIcon} />
        Atualizado a 2 dias atrás
        <StarIcon className={style.detIcon} /> 5
        <PeopleAltIcon className={style.detIcon} /> 2
      </Typography>
    </Box>
  );
};

export default Repository;
