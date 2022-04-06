import * as React from "react";
// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function Dashboard() {
  const {
    useAppSelector,
    selectAdmin,
    useAppDispatch,
    toggleAdmin,
    InputEmail,
    InputPassword,
    InputSubmit,
    Icon,
  } = shared;
  const dispatch = useAppDispatch();
  const admin = useAppSelector(selectAdmin);
  const { open, authed } = admin;

  const handleClose = () => {
    dispatch(toggleAdmin(false));
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
      <DialogTitle>
        <Icon icon="admin" />
      </DialogTitle>

      <DialogContent>
        <InputEmail />
        <InputPassword />
      </DialogContent>
      <DialogActions>
        <InputSubmit label="Sign in" />
      </DialogActions>
    </Dialog>
  );
}

/*
<pre>{JSON.stringify(admin, null, 2)}</pre>
*/
