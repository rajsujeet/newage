import './styles.css';
import React from "react";
import images from '../../constants/Images';
import { Box, Container, Grid } from '@mui/material';

function CenterImages() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div>
                <div className="slide-up">
                  <div className="inner">
                    <img src={images.iceEye} className="eye-img image-full-width" alt="logo" />
                  </div>
                </div>
                <div className="iceEye-text">
                  <h3>Lorem Ipsum is simply dummy text</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <div className="slide-up">
                  <div className="inner">
                    <img src={images.iceEye} className="eye-img image-full-width" alt="logo" />
                  </div>
                </div>    
                <div className="iceEye-text">
                  <h3>Lorem Ipsum is simply dummy text</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <div className='nature-img'>
                <img src={images.nature} className="img-logo image-full-width" alt="logo" />
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="nature-end-text">
                <h2>Lorem Ipsum is simply dummy text</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text.</p>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={2} sm={1}></Grid>
            <Grid item xs={10} sm={3}>
              <div className="nature-start-text">
                <h2>Lorem Ipsum is simply dummy text</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div className='nature-img-start'>
                <img src={images.nature} className="img-logo image-full-width" alt="logo" />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default CenterImages;