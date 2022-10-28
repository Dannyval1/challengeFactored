import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";

import Form from "../views/form/Form";
import SignIn from "../views/sign-in/SignIn";
import Profile from "../views/profile/Profile";

export default function Router() {
  const loggedIn = window.localStorage.getItem("isLogged");
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={loggedIn ? <Profile /> : <Form />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
