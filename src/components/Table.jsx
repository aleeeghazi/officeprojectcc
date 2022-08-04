import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable(props) {
console.log(props)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">Category</TableCell>
            {(props.type === 'expense'  || props.type === 'income') && <TableCell align="center">Description</TableCell>}
            {(props.type === 'expense'  || props.type === 'income' )&& <TableCell align="center">Amount</TableCell>}
            {props.type === 'expense' && <TableCell align="center">ThresholdExceeded</TableCell>}
            {props.type === 'category' && <TableCell align="center">Threshold</TableCell>}
            {props.type === 'category' && <TableCell align="center">Type</TableCell>}

          </TableRow>
        </TableHead>
        <TableBody>
          {props.data?.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date || row.createdAt}
              </TableCell>
              <TableCell align="center">{ ( props.type === 'expense' && row.category.name || props.type === 'income' && row.category.name) || row.name}</TableCell>
              <TableCell align="center">{row.description || row.threshold}</TableCell>
              
               <TableCell align="center">{row.amount || row.type}</TableCell>
              {(props.type === 'expense' )&&  <TableCell align="center" style={{color: row.thresholdExceeded && 'red'}}>{props.type === 'expense' && (row.thresholdExceeded ? 'Yes': 'No' )}</TableCell>}

             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}