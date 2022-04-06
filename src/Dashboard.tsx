import * as React from "react";
// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import { Dialog } from "@mui/material";

export default function Dashboard() {
  const { useAppSelector, selectAdmin, useAppDispatch, toggleAdmin } = shared;
  const dispatch = useAppDispatch();
  const admin = useAppSelector(selectAdmin);
  const { open } = admin;

  const handleClose = () => {
    dispatch(toggleAdmin(false));
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      sx={{ zIndex: 123456 }}
    >
      <pre>{JSON.stringify(admin, null, 2)}</pre>
    </Dialog>
  );
}
