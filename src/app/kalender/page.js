"use client";
import * as React from "react";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "id", label: "ID"},
  { id: "nama", label: "NAMA" },
  {
    id: "jabatan",
    label: "JABATAN",

  },
  {
    id: "size",
    label: "Aksi",

    align: "right",
  },
  
];

function createData(id, nama, jabatan, size) {
  return { id, nama, jabatan, size };
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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
    <Paper sx={{ width: "80%", overflow: "hidden" }}>
      <CenteredText>
        <Header />
        <DrawerHeader />
        <StyledPaper sx={{ width: '80%', maxHeight: '80vh', overflow: 'auto' }}>  
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
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
