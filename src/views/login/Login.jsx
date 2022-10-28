import React, { useState } from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LoginIcon from "@mui/icons-material/Login";
import swal from "sweetalert";

import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendToRegister = () => {
    navigate({
      pathname: "/sign",
    });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "ok") {
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("isLogged", true);
          navigate({
            pathname: "/profile",
          });
        } else if (data.status == "error") {
          swal("Bad job!", data.error, "error");
        } else {
          swal("Bad job!", "User not found", "error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="loginCard">
      <form onSubmit={handleSubmit}>
        <Box className="formLogIn" sx={{ display: "flex" }}>
          <Box sx={{ flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Avatar
                className="avatarImg"
                sx={{ width: 90, height: 90, mb: 3 }}
                src="/broken-image.jpg"
              />
              <Typography
                className="titleLog"
                sx={{ mb: 3 }}
                component="div"
                variant="h2"
              >
                LOG IN
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
                pr: 1,
                mb: 2,
                flexDirection: "column",
              }}
            >
              <TextField
                fullWidth
                required
                helperText=" "
                label="Email"
                value={email}
                onChange={handleEmail}
              />
              <TextField
                fullWidth
                required
                helperText=" "
                label="Password"
                type="password"
                value={password}
                onChange={handlePassword}
              />
              <Button type="submit" className="btn-log" variant="contained">
                <LoginIcon className="icon-login" /> Log In
              </Button>
            </Box>
            <div className="textLink">
              Not a member?
              <Button onClick={sendToRegister} variant="text">
                Create an Account
              </Button>
            </div>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Login;
