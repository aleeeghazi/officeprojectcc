import React, { useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { createCategoryStart } from '../store/category/categoryActions';


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
  const categoryTypes = [
    {
      value: "income",
      label: "Income"
    },
    {
      value: "expense",
      label: "Expense"
    },
  
  ];


const CategoryForm = (props) => {
    const [threshold, setThreshold] = useState('');
    const [category, setCategory] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const dispatch = useDispatch()
 console.log(threshold, category)
  const data={
    threshold,
    name:category,
    type:categoryType,
    createdAt: Date.now(),
    user:props.user.userId
  }
    const clickHandler= async ()=>{
      dispatch(createCategoryStart(data,props.user.token))
    }

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
                  Category Form
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
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Category Name"
                  onChange={(e)=>setCategory(e.target.value)}
                  value={category}

                  id="category"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ marginTop: 20 }}
                  label="Category"
                  fullWidth
                  select
                  variant="outlined"
                  value={categoryType}
                  onChange={(e)=>setCategoryType(e.target.value)}
                  id="categoryType"
                  margin="dense"
                >
                  {categoryTypes.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                  variant="outlined"
                  label="Threshold Value"
                  value={threshold}

                  onChange={(e)=>setThreshold(e.target.value)}
                  id="threshold"
                />
              </Grid>
              <Grid item xs={12} style={{textAlign:'center'}}>
                <Button variant="outlined" onClick={clickHandler}>Create</Button>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default CategoryForm