// import React, { useContext, useState } from "react";
import React from "react"
// import { Redirect } from "react-router-dom";
// import { AuthContext } from "../../firebase/auth";
// import firebaseConfig from "../../firebase/config.js";
import "./style";
import { Typography } from "@material-ui/core"
import CustomInput from "./customInput";
import {Link} from "react-router-dom"
import Button from "./Button";
import useStyles from './style';

const LoginForm = () => {
    const classes = useStyles()
   
    // const handleChange = (e) => {
    //   e.preventDefault();
    //   const { email, password } = e.target.elements;
    //   try {
    //     firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    //   } catch (error) {
    //     alert(error);
    //   }
    // };
    // const currentUser  = useContext(AuthContext);
    // if (currentUser) {
    //   return <Redirect to="/" />;
    // }

    const handleChange = e => {
      console.log("handleChange Triggered", e)
    }
 
    return (
    <>
      <div className={classes.loginContainer}>
        <Link to="/commerce-js-project/" className={classes.arrowBack}>
            go back
        </Link>
        <Typography variant="h5">Login Form</Typography>
        <form className={classes.form}>
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="password"
          />

          <Button type="button" color="primary" className={classes.formCustomButton}>
            Log in
          </Button>
        </form>
            <div className={classes.registerContainer}>
            <Typography variant="p" className={classes.register}> don't have any account?</Typography>
            <Typography variant="p" component={Link} to="/commerce-js-project/register" className="classes.registerLink">register</Typography>
            </div>
      </div>
      </>
    );
}
export default LoginForm