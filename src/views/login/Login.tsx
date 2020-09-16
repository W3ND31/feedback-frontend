import { Button, Grid, Link, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../store/auth/AuthActions";
import MuiStylesApp from "../../style/MuiStylesApp";

const Login = (props: any) => {
  const dispatch = useDispatch();
  const classes = MuiStylesApp();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent | null) => {
    event && event.preventDefault();

    if (!username || !password) {
      return alert("Preencha os campos obrigatórios");
    }

    dispatch(LoginAction({ username, password }));
  };

  const handleKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") handleSubmit(null);
  };
  return (
    <Grid className={classes.container} container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
      </Grid>
      <Grid item>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuário"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(event: any) => setUsername(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onKeyPress={handleKey}
            onChange={(event: any) => setPassword(event.target.value)}
          />
          <Button onClick={(e: React.FormEvent) => handleSubmit(e)} fullWidth variant="contained" color="primary">
            Entrar
          </Button>
          <Grid container direction="row" justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                {"Não tem uma conta?! Registre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
