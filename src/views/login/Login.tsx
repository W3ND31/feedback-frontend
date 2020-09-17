import { Button, Grid, Link, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import UserService from "../../services/UserService";
import { LoginAction } from "../../store/auth/AuthActions";
import { SnackbarOpen } from "../../store/snackbar/SnackbarActions";
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

    !props.cadastrar && dispatch(LoginAction({ username, password }));

    props.cadastrar &&
      UserService.createUser({ username, password }).then((res) => {
        if (res.status === 200) {
          dispatch(SnackbarOpen({ severity: "success", message: "Cadastro efetuado com sucesso!" }));
          props.history.push("/");
        }
      });
  };

  const handleKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") handleSubmit(null);
  };
  return (
    <Grid className={classes.container} container direction="column" alignItems="center" justify="center" spacing={2}>
      <Grid item>
        <Typography component="h1" variant="h5">
          {props.cadastrar ? "Cadastre-se" : "Login"}
        </Typography>
      </Grid>
      <Grid item>
        <form noValidate>
          <Grid container direction="column" spacing={2}>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
              <Button onClick={(e: React.FormEvent) => handleSubmit(e)} fullWidth variant="contained" color="primary">
                {props.cadastrar ? "Salvar" : "Entrar"}
              </Button>
            </Grid>
          </Grid>

          {!props.cadastrar && (
            <Grid container direction="row" justify="flex-end">
              <Grid item>
                <Link href="/cadastrar" variant="body2">
                  {"Não tem uma conta?! Registre-se"}
                </Link>
              </Grid>
            </Grid>
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default withRouter(Login);
