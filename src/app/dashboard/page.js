"use client";
import React from "react";
import {
  Box,
  Grid,
  styled,
  Card,
  CardContent,
  Button,
  Typography,
  CardActions,
  Divider,
} from "@mui/material";
import Header from "../components/Header";
import Tabel from "../components/Tabel";
import Formpengumuman from "../components/Formpengumuman";

const DrawerHeader = styled("box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Page = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Header />
          <DrawerHeader />

          <Grid
            item
            style={{
              xs: 6,
              sm: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card sx={{ maxWidth: 345, marginTop: "10pc" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                style={{
                  color: "#0D3B70",
                  marginTop: "20px",
                }}
              >
                Jumlah Karyawan
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            style={{
              xs: 6,
              sm: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card sx={{ maxWidth: 345, marginTop: "10pc" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                style={{
                  color: "#0D3B70",
                  marginTop: "20px",
                }}
              >
                Izin Dan Cuti
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <br />
        <Divider />
      </Box>

      <Box
        sx={{
          marginLeft: "70px",
          marginRight: "40px",
          width: "100",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DrawerHeader />

        <Box
          sx={{
            background: "#F2F4F7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100",
            width:"400"
          }}
        >
          <Box
            sx={{
              background: "white",
              width: "auto",
              p: 3,
              borderRadius: 4,
              color:"#0D3B70",
              fontWeight:"bold",
              fontSize:"20px"
            }}
          >
            PENGUMUMAN HARI INI
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Formpengumuman/>
            </div>
            

            
            <Tabel />
          </Box>
        </Box>

        {/* <Tabel /> */}
      </Box>
    </Box>
  );
};

export default Page;
