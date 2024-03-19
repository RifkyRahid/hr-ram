"use client";
import * as React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import {
  styled,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
} from "@mui/material";

const columns = [
  { id: "id", label: "ID" },
  { id: "nama", label: "NAMA" },
  {
    id: "jabatan",
    label: "JABATAN",
  },
  {
    id: "aksi",
    label: "AKSI",
  },
];

function createData(id, nama, jabatan, aksi) {
  return { id, nama, jabatan, aksi };
}

const rows = [
  createData("001", "Karyawan 1", "Jabatan 1", 3287263),
  createData("002", "Karyawan 2", "Jabatan 1", 9596961),
  createData("003", "Karyawan 3", "Jabatan 1", 301340),
  createData("004", "Karyawan 4", "Jabatan 1", 9833520),
  createData("005", "Karyawan 5", "Jabatan 1", 9984670),
  createData("006", "Karyawan 6", "Jabatan 1", 7692024),
  createData("007", "Karyawan 7", "Jabatan 1", 357578),
  createData("008", "Karyawan 8", "Jabatan 1", 70273),
  createData("009", "Karyawan 9", "Jabatan 1", 1972550),
  createData("010", "Karyawan 10", "Jabatan 1", 377973),
  createData("011", "Karyawan 11", "Jabatan 1", 640679),
  createData("012", "Karyawan 12", "Jabatan 1", 242495),
  createData("013", "Karyawan 13", "Jabatan 1", 17098246),
  createData("014", "Karyawan 14", "Jabatan 1", 923768),
  createData("015", "Karyawan 15", "Jabatan 1", 8515767),
];

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

const ButtonWrapper = styled("div")({
  textAlign: "right", // Letakkan tombol di sebelah kanan
  marginTop: "10px", // Tambahkan jarak di atas tombol
  marginRight: "50px",
  marginBottom: "10px",
});

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "80%", overflow: "hidden", marginLeft:"" }}>
      <CenteredText>
        <Header />
        <DrawerHeader />
        <StyledPaper sx={{ width: "80%", maxHeight: "100vh", overflow: "auto" }}>
          <ButtonWrapper>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  marginLeft: "50px",
                  marginTop: "20px",
                  marginBottom: "10px",
                  fontWeight:"bold",
                  color:"#0D3B70",
                  fontSize:"20px"
                }}
              >
                DATA KARYAWAN
              </p>
            </div>
            <SearchBar />
            <Button
              sx={{
                color: "#0D3B70",
                fontWeight: "bold",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#FCB600",
              }}
            >
              TAMBAH
            </Button>
          </ButtonWrapper>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </StyledPaper>
      </CenteredText>
    </Paper>
  );
}
