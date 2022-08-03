import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  calories,
  fat,
  carbs,
 protein) {
  return { name, calories, fat, carbs, protein };
}


export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Threshold Exceeded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenseArr?.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell component="th" scope="row" style={{color: row.thresholdExceeded && 'red'}}>
                {row.date}
              </TableCell>
              <TableCell align="right"style={{color: row.thresholdExceeded && 'red'}}>{row.category}</TableCell>
              <TableCell align="right" style={{color: row.thresholdExceeded && 'red'}}>{row.description}</TableCell>
              <TableCell align="right" style={{color: row.thresholdExceeded && 'red'}}>{row.amount}</TableCell>
              <TableCell align="right" style={{color: row.thresholdExceeded && 'red'}}>{row.thresholdExceeded ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
