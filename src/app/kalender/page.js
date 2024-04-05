"use client";
import * as React from "react";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  // marginTop: "64px", // Menambahkan margin atas yang sama dengan AppBar
}));

const CenteredText = styled("div")({
  textAlign: "center", // Menengahkan teks secara horizontal
});

const StyledPaper = styled(Paper)({
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <Paper sx={{ width: "80%", overflow: "hidden" }}>
      <CenteredText>
        <Header />
        <DrawerHeader />
        <StyledPaper sx={{ width: '80%', maxHeight: '90vh', overflow: 'auto' }}>  
        <Calendar />
        </StyledPaper>
      </CenteredText>
    </Paper>
  );
}
