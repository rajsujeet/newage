import './styles.css';
import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Button, Typography } from '@mui/material';

function Products() {
  const [homeBars, setHomeBars] = useState([]);

  useEffect(() => {
    getHomeBars();
  }, []);

  const getHomeBars = () => {
    Promise.all([
      fetch('https://shopnewage.com/collections/home-bar/products/home-bar-display-cabinet-21-61005.json').then(resp => resp.json()),
      fetch('https://shopnewage.com/collections/home-bar/products/home-bar-2-door-with-drawer-cabinet-21-61004.json').then(resp => resp.json()),
      fetch('https://shopnewage.com/collections/home-bar/products/home-bar-3-drawer-cabinet-21-61003.json').then(resp => resp.json()),
      fetch('https://shopnewage.com/collections/home-bar/products/home-bar-wall-wine-rack-cabinet-21-61000.json').then(resp => resp.json()),
      fetch('https://shopnewage.com/collections/home-bar/products/home-bar-double-display-cabinet-42-61022.json').then(resp => resp.json()),
      fetch('https://shopnewage.com/collections/home-bar/products/home-bar-wine-storage-cabinet-21-61023.json').then(resp => resp.json())
    ]).then(res => {
      setHomeBars(res);
    }).catch(err => {

    })
  }
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            Shop Home Bars
          </Typography>
          <Typography component="h4" >
            Choose from a variety of different styles to suit your home
          </Typography>
          <Grid container spacing={3}>
            {homeBars && homeBars.length > 0 && homeBars.map((item, index) => {
              return (
                <Grid key={`product_${index}`} item xs={6} sm={4}>
                  <div className='shop-home-bar-card'>
                    <img src={item?.product?.image?.src} className='image-res'></img>
                    <p className='del-price'><del>$500.00</del></p>
                    <p className='price'>$365.58</p>
                    <p>{item?.product?.title}</p>
                    <Button variant="contained">Buy Now</Button>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Products;