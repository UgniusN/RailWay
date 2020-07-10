import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {useEffect, useState} from "react"
import travelsApi from '../../../../../Api/usersApi'


const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  {
    id: 'start_destination',
    label: 'start_destination',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'end_destination',
    label: 'end_destination',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'price',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 700,
  },
});

export default function StickyHeadTable() {

  const [travels, setTravels] = useState([]);

  useEffect(() => {
    travelsApi.fetchTravels()
        .then(response => setTravels(response.data))
  }, [])

  const classes = useStyles();
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
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {travels.map((column) => (
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
            {travels.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((travels) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={travels.code}>
                  {columns.map((column) => {
                    const value = travels[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        count={travels.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}