/** @format */

// /** @format */
import { InputAdornment, FormGroup, Grid, TextField } from "@mui/material";
import style from "./FormSearchRepository.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FormSearchRepository = (props) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <FormGroup>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
              <TextField
                className={style.textInput}
                id="standard"
                variant="outlined"
                placeholder="Buscar um repositório..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <TextField
                className={style.textInput}
                id="outlined-basic"
                variant="outlined"
                placeholder="Filtrar por tag"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FilterListIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};

export default FormSearchRepository;
