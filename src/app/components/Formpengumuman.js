import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        TAMBAH PENGUMUMAN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle style={{ fontWeight: "bold" }}>
          Tambah Pengumuman
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Untuk memberikan pengumuman kepada karyawan, tuliskan isi pengumuman
            pada tempat yang disediakan.
          </DialogContentText>

          <TextField
            required
            margin="dense"
            id="name"
            name="detail"
            label="Detail Pengumuman"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Kembali</Button>
          <Button type="submit">Tambah</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
