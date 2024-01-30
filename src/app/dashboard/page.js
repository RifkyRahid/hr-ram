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
        <Grid container spacing={3}>
          <Header />
          <DrawerHeader />

          <Grid item style={{ xs: 6, sm: 6 }}>
            <Card sx={{ maxWidth: 345, marginTop: "10pc" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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

          <Grid item style={{ xs: 6, sm: 6 }}>
            <Card sx={{ maxWidth: 345, marginTop: "10pc" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
      </Box>
    </Box>
  );
};

export default Page;
