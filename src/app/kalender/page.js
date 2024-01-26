
"use client"
import React from "react";
import { Box, Grid, styled } from "@mui/material";
import Header from "../components/Header";
import CustomCard from "../components/Card";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Page = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3} flexDirection={"row"}>
          <Header />
          <DrawerHeader />

          <Grid item sx={12} sm={6}>
            <CustomCard />
          </Grid>

          <Grid item sx={12} sm={6}>
            <CustomCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
