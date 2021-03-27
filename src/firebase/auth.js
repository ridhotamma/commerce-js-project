// Here we create a AuthContext object which is used to share the currentUser status between our various components.
// onAuthStateChanged is an observer for changes to the user’s sign-in state,
// this is triggered when user’s sign in or sign out.

import React, { useEffect, useState } from "react";
import firebaseConfig from "./config.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
