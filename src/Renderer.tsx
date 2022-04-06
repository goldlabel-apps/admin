import * as React from "react";
// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";

export default function Renderer() {
  const {
    useAppSelector,
    selectAdmin,
    useAppDispatch,
    toggleAdmin,
    InputEmail,
    InputPassword,
    InputSubmit,
    Icon,
    signIn,
  } = shared;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailValid, setEmailValid] = React.useState(false);
  const [valid, setValid] = React.useState(false);

  const dispatch = useAppDispatch();
  const admin = useAppSelector(selectAdmin);
  const { open, authed } = admin;

  const handleClose = () => {
    dispatch(toggleAdmin(false));
  };

  const validateEmail = (email) => {
    if (!email) return false;
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const onEmailChange = (email: string) => {
    setEmail(email);
    const valid = validateEmail(email);
    setEmailValid(valid);
    setValid(valid);
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const onSignin = () => {
    dispatch(signIn(email, password));
  };

  return (
    <Dialog
      fullScreen={authed}
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      sx={{ zIndex: 123456 }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>
        <Icon icon="admin" />
      </DialogTitle>

      <DialogContent>
        <InputEmail value={email} onChange={onEmailChange} />
        <InputPassword value={password} onChange={onPasswordChange} />
      </DialogContent>

      <DialogActions>
        <InputSubmit label="Sign in" disabled={!valid} onSubmit={onSignin} />
      </DialogActions>
    </Dialog>
  );
}

/*
<pre>{JSON.stringify(admin, null, 2)}</pre>
*/
