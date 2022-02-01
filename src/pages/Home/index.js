import React, { Suspense } from "react";
import FullImage from '../../components/FullImage';
// import Products from '../../components/Products';
// import CenterImages from "../../components/CenterImages";
// import Task from "../../components/Task";
import { Container, Box, Button, MenuItem, InputLabel, Select, Avatar, TextareaAutosize, CssBaseline, TextField, FormControl, FormControlLabel, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Products = React.lazy(() => import("../../components/Products"));
const CenterImages = React.lazy(() => import("../../components/CenterImages"));
const Task = React.lazy(() => import("../../components/Task"));

function Home() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <FullImage />
        <Suspense fallback={<div>Loading...</div>}>
          <Products />
          <CenterImages />
          <Task />
        </Suspense>
       
      </Container>
    </ThemeProvider>

  )
}

export default Home;