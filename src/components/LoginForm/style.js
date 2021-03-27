import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  loginContainer: {
    textAlign: "center",
    margin: "0 auto",
    height: "100vh",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  form: {
    minWidth: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    background: "white",
    padding: "20px",
    marginTop: "30px",
  },

  registerContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    padding: "0 20px",
  },

  register: {},

  registerLink: {
    textDecoration: "none",
    color: "black",
  },

  arrowBack: {
    position: "absolute",
    left: "10%",
    bottom: "80%",
  },

  formCustomButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}));
