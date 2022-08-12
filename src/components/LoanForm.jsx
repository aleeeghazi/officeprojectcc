import React, { useEffect, useState } from 'react'
import {  MenuItem } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { teal, grey } from "@material-ui/core/colors";
import { useDispatch, useSelector } from 'react-redux';
import { createLoanStart } from '../store/loan/loanActions';


const styles = theme => ({
    root: {
      flexGrow: 1
    },
    primaryColor: {
      color: teal[500]
    },
    secondaryColor: {
      color: grey[700]
    },
  
    padding: {
      padding: 0
    },
    mainHeader: {
      backgroundColor: grey[100],
      padding: 20,
      alignItems: "center"
    },
    mainContent: {
      padding: 40
    },
    secondaryContainer: {
      padding: "20px 25px",
      backgroundColor: grey[200]
    }
  });

  const loanOptions = [
    {
      value: "income",
      label: "Income"
    },
    {
      value: "expense",
      label: "Expense"
    },
  
  ];
const statusOptions = {
    expense: [
        {
            value: "pending",
            label: "Pending"
        },
        {
            value: "recieved",
            label: "Recieved"
        },

    ],
    income: [
        {
            value: "pending",
            label: "Pending"
        },
        {
            value: "paid",
            label: "Paid"
        },

    ]
}
const LoanForm = (props) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [loanType, setLoanType] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [loanTo, setLoanTo] = useState('');
    const [loanFrom, setLoanFrom] = useState('');
    const [status, setStatus] = useState('');

    const dispatch = useDispatch()
    const user = useSelector(state=>state.auth.currentUser.user)

//  console.log(amount, category)
  const data={
    description,
    amount,
    loanType,
    createdAt: Date.now(),
    user:user.userId,
    loanTo,
    loanFrom,
    returnDate: returnDate!=='' && new Date(returnDate).getTime(),
    status
  }
  const clickHandler= async ()=>{
    console.log(data)
    if(!props.data){
      dispatch(createLoanStart(data,user.token))
    }else{
        console.log('oncomee',data)
        const res = await axios.put(`http://localhost:5000/api/loan/${props.data._id}`,data,{
        headers:{
          "auth-token": user.token
        }
      }).then((res)=>props.setOpenModal(false))
  
      }

  }
      useEffect(()=>{
        setDescription('')
        setLoanTo('')
        setAmount('')
        setLoanFrom('')
        setReturnDate('')
        setLoanType('')
        setStatus('')

      }, [props.openModal])
      useEffect(()=>{
        if(props.data){
          setDescription(props.data?.description)
          setAmount(props.data?.amount)
          setLoanTo(props.data?.loanTo)
          setLoanFrom(props.data?.loanFrom)
          setReturnDate(props.data?.returnDate.split('T')[0])
          setLoanType(props.data?.loanType)
          setStatus(props.data?.status)
        }
      }, [props.openModal])
//       useEffect(()=>{
//         if(props.data){
//           setDescription(props.data?.description)
//           setAmount(props.data?.amount)
//           setCategory(props.data?.category?._id)
//         }
//       }, [props.openModal])
  return (
    <Dialog
      className={styles.root}
      fullWidth
      maxWidth="md"
      open={props.openModal}
      onClose={() => {props.setOpenModal(false)}}
    >
      <DialogContent className={styles.padding}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container direction="row" className={styles.mainHeader}>
              <Grid item xs={12}>
                <Typography className={styles.primaryColor} variant="h5">
                  Income Form
                </Typography>
              </Grid>

            </Grid>
            <Grid
              container
              direction="row"
              className={styles.mainContent}
              spacing={1}
            >

              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ marginTop: 20 }}
                  label="Loan Type"
                  fullWidth
                  select
                  variant="outlined"
                  value={loanType}
                  onChange={(e)=>setLoanType(e.target.value)}
                  id="country"
                  margin="dense"
                  helperText="Please select category"
                >
                  {loanOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              { loanType !== '' && loanType==='expense' && <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Loaned to"
                  onChange={(e)=>setLoanTo(e.target.value)}
                  value={loanTo}
                  id="loanTo"
                />
              </Grid>}
              {loanType !== '' && loanType==='income' && <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Loanee"
                  value={loanFrom}
                  onChange={(e)=>setLoanFrom(e.target.value)}
                  id="loanFrom"
                />
              </Grid>}
              {loanType !== '' && <Grid item xs={12}>
                <TextField
                  style={{ marginTop: 20 }}
                  label="Status"
                  fullWidth
                  select
                  variant="outlined"
                  value={status}
                  onChange={(e)=>setStatus(e.target.value)}
                  id="country"
                  margin="dense"
                >
                  {loanType==='income' ? statusOptions.income.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )) : statusOptions.expense.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>))}
                </TextField>
              </Grid>}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  type="date"
                  label="Return date"
                  defaultValue={returnDate}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(e)=>setReturnDate(e.target.value)}
                  id="amount"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                  variant="outlined"
                  label="Amount"
                  value={amount}

                  onChange={(e)=>setAmount(e.target.value)}
                  id="amount"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  id="amount"
                />
              </Grid>
              <Grid item xs={12} style={{textAlign:'center'}}>
              <Button variant="outlined" onClick={clickHandler}>{props.data ? 'Update':'Create'}</Button>
              </Grid>
                  
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default LoanForm