import React, { useState } from "react";
//material ui from other komponen
import Button from "@material-ui/core/Button";

//import styles

import styling from "./style.js";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";

export default function Registrasi() {
  const desain = styling();
  const [form, setForm] = useState({
    email: "",
    password: "",
    ulangi_password: ""
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    ulangi_password: ""
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value]
    });
    setError({
      ...error,
      [e.target.name]: ""
    });
  };

  const validate = () => {
    const newError = { ...error };

    if (!form.email) {
      newError.email = "Email wajib diisi";
    } else if (!isEmail(form.email[0])) {
      newError.email = "Email tidak valid";
    }

    if (!form.password) {
      newError.password = "Password wajib diisi";
    }

    if (!form.ulangi_password) {
      newError.ulangi_password = "Ulangi Password wajib diisi";
    } else if (form.ulangi_password !== form.password) {
      newError.ulangi_password = "Ulangi Password tidak sama dengan Password";
    }

    return newError;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const findErrors = validate();

    if (Object.keys(findErrors).some(err => err !== "")) {
      setError(findErrors);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper className={desain.paper}>
        <Typography
          color="primary"
          variant="h5"
          component="h1"
          className={desain.title}
        >
          Create New Account
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            id="email"
            type="email"
            name="email"
            margin="normal"
            label="Email"
            fullWidth
            required
            value={form.email}
            onChange={handleChange}
            helperText={error.email}
            error={error.email ? true : false}
          />

          <TextField
            id="password"
            type="password"
            name="password"
            margin="normal"
            label="Password"
            fullWidth
            required
            value={form.password}
            onChange={handleChange}
            helperText={error.password}
            error={error.password ? true : false}
          />

          <TextField
            id="ulangi_password"
            type="ulangi_password"
            name="ulangi_password"
            margin="normal"
            label="Re-type Password"
            fullWidth
            required
            value={form.ulangi_password}
            onChange={handleChange}
            helperText={error.ulangi_password}
            error={error.ulangi_password ? true : false}
          />

          <Grid container className={desain.buttons}>
            <Grid item xs>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large "
              >
                Register
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                variant="contained"
                size="large"
                to="/login"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
