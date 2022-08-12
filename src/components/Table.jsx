import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { getExpenseStart } from '../store/expense/expenseActions';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryStart } from '../store/category/categoryActions';
import { getIncomeStart } from '../store/income/incomeActions';
import ExpenseForm from './ExpenseForm';
import IncomeForm from './IncomeForm';
import CategoryForm from './CategoryForm';
import { getLoanStart } from '../store/loan/loanActions';
import LoanForm from './LoanForm';

export default function BasicTable(props) {
const user = useSelector(state=>state.auth.currentUser.user)
const [openModal,setOpenModal] = React.useState(false)
const [id,setId] = React.useState('')
const [data,setData] = React.useState('')
const dispatch=useDispatch()

const editEntry= (data)=> {
  console.log(data)
  if (props.type === 'expense'){
    setOpenModal(true)
    setId(data._id)
    setData(data)
  }else if (props.type === 'income'){
    setOpenModal(true)
    setId(data._id)
    setData(data)
  }else if (props.type === 'category'){
    setOpenModal(true)
    setId(data._id)
    setData(data)
  }
  else if (props.type === 'loan'){
    setOpenModal(true)
    setId(data._id)
    setData(data)
  }
}
console.log('ttttt',props.type)
  const deleteEntry = (data) => {
    if (props.type === 'expense') {
      axios.delete(`http://localhost:5000/api/expense/${data._id}`).then(() => dispatch(getExpenseStart(user)))
    } else if (props.type === 'income') {
      axios.delete(`http://localhost:5000/api/income/${data._id}`).then(() => dispatch(getIncomeStart(user)))

    } else if (props.type === 'category') {
      axios.delete(`http://localhost:5000/api/category/${data._id}`).then(() => dispatch(getCategoryStart(user)))
    } else if (props.type === 'loan') {
      axios.delete(`http://localhost:5000/api/loan/${data._id}`).then(() => dispatch(getLoanStart(user)))
    }

  }
  React.useEffect(()=>{
    if(!props.openModal){
      if (props.type === 'expense'){
        dispatch(getExpenseStart(user))
      }else if (props.type === 'income'){
        dispatch(getIncomeStart(user))
      }else if (props.type === 'category'){
        dispatch(getCategoryStart(user))
      }else if (props.type === 'loan'){
        dispatch(getLoanStart(user))
      }
    }
  },[props.openModal])
  return (
    <TableContainer component={Paper}>
      {props.type ==='expense' && <ExpenseForm openModal={openModal} setOpenModal={setOpenModal} user={props.user} id={id}  data={data} />}
      {props.type ==='income' && <IncomeForm openModal={openModal} setOpenModal={setOpenModal} user={props.user} id={id}  data={data} />}
      {props.type ==='category' && <CategoryForm openModal={openModal} setOpenModal={setOpenModal} user={props.user} id={id}  data={data} />}
      {props.type ==='loan' && <LoanForm openModal={openModal} setOpenModal={setOpenModal} user={props.user} id={id}  data={data} />}

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            {props.type !=='loan' && <TableCell align="center">Category</TableCell>}
            {(props.type === 'expense'  || props.type === 'income' || props.type === 'loan') && <TableCell align="center">Description</TableCell>}
            {(props.type === 'expense'  || props.type === 'income' || props.type === 'loan'  )&& <TableCell align="center">Amount</TableCell>}
            {props.type === 'expense' && <TableCell align="center">ThresholdExceeded</TableCell>}
            {props.type === 'category' && <TableCell align="center">Threshold</TableCell>}
            {props.type === 'category' && <TableCell align="center">Type</TableCell>}
            {props.type === 'loan' && <TableCell align="center">Loan type</TableCell>}
            {props.type === 'loan' && <TableCell align="center">Return date</TableCell>}
            {props.type === 'loan' && <TableCell align="center">Status</TableCell>}

            <TableCell align="center">Action</TableCell>

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
              {props.type!=='loan' && <TableCell align="center">{ ( props.type === 'expense' && row.category?.name || props.type === 'income' && row.category?.name) || row?.name}</TableCell>}           
               <TableCell align="center">{row.description || row.threshold}</TableCell>
               <TableCell align="center">{row.amount || row.type}</TableCell>
              {(props.type === 'expense' )&&  <TableCell align="center" style={{color: row.thresholdExceeded && 'red'}}>{props.type === 'expense' && (row.thresholdExceeded ? 'Yes': 'No' )}</TableCell>}
              {props.type==='loan' && <TableCell align="center">{row.loanType}</TableCell>}
              {props.type==='loan' && <TableCell align="center">{`${new Date(row.returnDate).getFullYear()}/${new Date(row.returnDate).getMonth() + 1}/${new Date(row.returnDate).getDate()}`}</TableCell>}
              {props.type==='loan' && <TableCell align="center" style={{color: row.status!=='pending' ? 'green' : 'red'}}>{row.status}</TableCell>}
              <TableCell align="center" style={{display:'flex', justifyContent:'center'}}>
                <div style={{marginRight:20, height:40}}  >
                <FontAwesomeIcon icon={faTrash} onClick={()=>deleteEntry(row)}/>
                </div>
              {props.type!=='category' && <div style={{height:20}}>
                <FontAwesomeIcon icon={faEdit} onClick={()=>editEntry(row)}/>
                </div>}
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}