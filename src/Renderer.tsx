import * as React from "react";
// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
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

  const [email, setEmail] = React.useState("listingslab@gmail.com");
  const [password, setPassword] = React.useState("2022@^");
  const [emailValid, setEmailValid] = React.useState(false);
  const [valid, setValid] = React.useState(false);
  const dispatch = useAppDispatch();
  const admin = useAppSelector(selectAdmin);
  const { open, uid } = admin;

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

  if (uid) return null;

  return (
    <Dialog
      fullScreen={uid}
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      sx={{ zIndex: 123456 }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ m: 1 }}>
            <Icon icon="admin" />
          </Box>
          <Box sx={{ m: 1 }}>
            <Typography>Admin</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton color="primary" onClick={handleClose}>
              <Icon icon="close" />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent>
        <InputEmail value={email} valid={emailValid} onChange={onEmailChange} />
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
<IconButton
  color="primary"
  onClick={(e) => {
    e.preventDefault();
  }}
>
  <Icon icon="help" />
</IconButton>
*/
