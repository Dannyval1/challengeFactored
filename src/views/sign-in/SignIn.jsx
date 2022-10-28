import React, { useState, useContext } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import swal from "sweetalert";

import "./SignIn.css";

import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const SignIn = () => {
  const { skills, setSkills } = useContext(Context);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");

  const navigate = useNavigate();

  const sendToLog = () => {
    navigate({
      pathname: "/",
    });
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        lastname,
        email,
        password,
        position,
        skills,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Good job!", "You've been registered", "success");
        navigate({
          pathname: "/",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSkillChange = (event) => {
    const stateCopy = [...skills];
    for (const s of stateCopy) {
      if (s.Skill === event.target.name) {
        setSkills((s.valueSkill = event.target.value));
      }
    }
    setSkills([...skills]);
  };

  return (
    <div className="formPage">
      <div className="inner-wrapper">
        <div className="form">
          <div className="signCard">
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
                      SIGN IN
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      pl: 1,
                      pb: 1,
                      pr: 1,
                      mb: 2,
                    }}
                  >
                    <TextField
                      required
                      fullWidth
                      helperText=" "
                      label="Name"
                      value={name}
                      onChange={handleName}
                    />
                    <TextField
                      required
                      fullWidth
                      helperText=" "
                      label="Last Name"
                      value={lastname}
                      onChange={handleLastname}
                    />
                    <TextField
                      required
                      fullWidth
                      helperText=" "
                      label="Email"
                      value={email}
                      onChange={handleEmail}
                    />
                    <TextField
                      required
                      fullWidth
                      helperText=" "
                      label="Password"
                      type="password"
                      value={password}
                      onChange={handlePassword}
                    />
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Position
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="simple-select"
                        value={position}
                        label="Position"
                        onChange={handlePosition}
                      >
                        <MenuItem value={"Frontend Developer"}>
                          Frontend Developer
                        </MenuItem>
                        <MenuItem value={"Backend Developer"}>
                          Backend Developer
                        </MenuItem>
                        <MenuItem value={"Technical Arquitect"}>
                          Arquitect
                        </MenuItem>
                        <MenuItem value={"UX"}>UX</MenuItem>
                        <MenuItem value={"UI"}>UI</MenuItem>
                      </Select>
                    </FormControl>
                    <Box
                      sx={{
                        mb: 2,
                        width: 1,
                      }}
                    >
                      <Typography
                        className="textRating"
                        sx={{ mb: 3, mt: 5 }}
                        component="div"
                        variant="body1"
                      >
                        Rate your skills from 0 to 5
                      </Typography>
                      {skills.map((skill, { Skill }) => (
                        <FormControl
                          fullWidth
                          key={skill.Skill}
                          sx={{
                            mb: 1,
                            mt: 2,
                          }}
                        >
                          <InputLabel id="demo-simple-select-label">
                            {skill.Skill}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            value={Skill}
                            label={skill.Skill}
                            name={skill.Skill}
                            onChange={handleSkillChange}
                            defaultValue=""
                          >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={0}>0</MenuItem>
                          </Select>
                        </FormControl>
                      ))}
                    </Box>
                    <Button
                      sx={{ mt: 3 }}
                      className="btn-log"
                      variant="contained"
                      type="submit"
                    >
                      <LoginIcon className="icon-login" /> Sign In
                    </Button>
                  </Box>

                  <div className="textLink">
                    I have an account.
                    <Button onClick={sendToLog} variant="text">
                      Click here
                    </Button>
                  </div>
                </Box>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
