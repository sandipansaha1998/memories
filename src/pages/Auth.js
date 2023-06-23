import { Avatar, Button, Paper, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../api";
import { login } from "../actions/auth";
import { notify } from "../components/Notification.js";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPasword: "",
  };
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const switchMode = () => {
    console.log(formData);
    setFormData(initialState);
    setIsSignUp((isSignUp) => {
      return !isSignUp;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      let response = await signup(formData);
      if (response.success) {
        notify().success("Successful Sign up");
        switchMode();
      } else {
        notify().error(response.message);
      }
    } else {
      const message = await dispatch(login(formData));
      if (message) {
        notify().error(message);
      } else {
        notify().success("Welcome ");
      }
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let auth = useSelector((state) => state.auth);
  if (auth) {
    navigate("/");
  }

  return (
    <div className="col-10 col-md-7 col-lg-5 mx-auto">
      <Paper className="text-center p-4">
        <Avatar className="mx-auto mb-2">
          <LockIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign up" : "Login"}</Typography>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column gap-2 p-1">
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  type="text"
                  required
                  value={formData.firstName}
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
              autoFocus
              value={formData.email}
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type={showPassword ? "text" : "password"}
              value={formData.password}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="text"
              />
            )}
            <input
              type="submit"
              className="btn btn-primary col-4 mt-4 mx-auto"
              variant="contained"
              value={isSignUp ? "Sign up" : "Login"}
            />
          </div>
        </form>
        <Button className="text-end mt-2 " onClick={switchMode}>
          <u className=" ">
            {isSignUp
              ? "Already have an Account? Login"
              : "Don't have an account ? Sign up "}
          </u>
        </Button>
      </Paper>
    </div>
  );
};

export default Auth;
