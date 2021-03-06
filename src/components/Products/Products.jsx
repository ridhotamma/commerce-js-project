import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
// import { AuthContext } from "../../firebase/auth";
// import firebaseConfig from "../../firebase/config";
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  // const { currentUser } = useContext(AuthContext);
  // if (!currentUser) {
  //   return <Redirect to="/login" />;
  // }
  
  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

