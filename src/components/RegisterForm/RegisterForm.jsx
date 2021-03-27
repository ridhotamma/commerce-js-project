import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import firebaseConfig from "../../firebase/config";
import { Typography } from "@material-ui/core";
import CustomInput from "../LoginForm/customInput";
import { Link } from "react-router-dom";
import Button from "../LoginForm/Button";
import useStyles from "./styles";

const RegisterForm = () => {
  const classes = useStyles();
  // firebase sign up authentication
  // const [currentUser, setCurrentUser] = useState(null);
  //handling submit form from the user to go to the firebase
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { email, password } = e.target.elements;
  //   try {
  //     firebaseConfig
  //       .auth()
  //       .createUserWithEmailAndPassword(email.value, password.value);
  //     setCurrentUser(true);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // if user already login redirect to the main menu
  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }

  const handleChange = e => {
    console.log("handle change trigger")
  }
  return (
    <>
      <div className={classes.loginContainer}>
        <Link to="/commerce-js-project/" className={classes.arrowBack}>
          go back
        </Link>

        <Typography variant="h5">Register Form</Typography>

        <form className={classes.form} onChange={handleChange}>
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={handleChange}
            type="text"
          />
          <CustomInput
            labelText="Username"
            id="username"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={handleChange}
            type="text"
          />

          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={handleChange}
            type="password"
          />

          <Button
            type="button"
            color="primary"
            className={classes.formCustomButton}
          >
            Register
          </Button>
        </form>
        <div className={classes.registerContainer}>
          <Typography variant="p" className={classes.register}>
            already have an account?
          </Typography>
          <Typography
            variant="p"
            component={Link}
            to="/commerce-js-project/login"
            className="classes.registerLink"
          >
            login
          </Typography>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
