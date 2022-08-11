import React, { useEffect, useState } from 'react'
import { withStyles, MenuItem } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { teal, grey } from "@material-ui/core/colors";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createExpenseStart } from '../store/expense/expenseActions';



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


const ExpenseForm = (props) => {
 
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [categoryOptions, setCategoryOptions] = useState([]);
    const user = useSelector(state=>state.auth.currentUser.user)
    const expenseArr = useSelector(state=>state.expense.expenseArr)
   
    const dispatch = useDispatch()
 console.log(props.id)
 console.log(props.data)

 const getExpense = ()=>{
  
 }
  useEffect(()=>{
    if(props.id){
      getExpense()
    }
    
  },[props.id])
  const data={
    description,
    amount,
    category,
    date: Date.now(),
    user:user.userId
  }
    const clickHandler= async ()=>{
      if (!props.data){
        dispatch(createExpenseStart(data,user.token))
      }else{
        console.log('dafffadad',data)
        const res = await axios.put(`http://localhost:5000/api/expense/${props.data._id}`,data,{
        headers:{
          "auth-token": props.user.token
        }
      }).then((res)=>props.setOpenModal(false))
      }
    }
    const getUserCategories = async () =>{
      const res = await axios.get(`http://localhost:5000/api/category/${props.user.userId}/expense`,data,{
        headers:{
          "auth-token": props.user.token
        }
      })
      if(res.status===200){
        setCategoryOptions(res.data)
      }
    }
    useEffect(()=>{
      setDescription('')
      setCategory('')
      setAmount('')
      if(props.openModal){
        getUserCategories()
      }
    }, [props.openModal])

    useEffect(()=>{
      if(props.data){
        setDescription(props.data?.description)
        setAmount(props.data?.amount)
        setCategory(props.data?.category?._id)
      }
    }, [props.openModal])
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
                  Expense Form
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
                  label="Category"
                  fullWidth
                  select
                  variant="outlined"
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                  id="country"
                  margin="dense"
                  helperText="Please select category"
                >
                  {categoryOptions.map(option => (
                    <MenuItem key={option._id} value={option._id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Description"
                  onChange={(e)=>setDescription(e.target.value)}
                  value={description}

                  id="description"
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

export default ExpenseForm