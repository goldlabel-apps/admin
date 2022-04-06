import * as React from "react";
// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import { Dialog } from "@mui/material";

export default function Dashboard() {
  const { useAppSelector, selectAdmin } = shared;
  const admin = useAppSelector(selectAdmin);

  return (
    <Dialog fullScreen open>
      <pre>{JSON.stringify(admin, null, 2)}</pre>
    </Dialog>
  );
}
