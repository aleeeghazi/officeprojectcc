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
  const countries = [
    {
      value: "Transport",
      label: "Transport"
    },
    {
      value: "Home",
      label: "Home"
    },
    {
      value: "Misc",
      label: "Misc"
    },

  ];

const ExpenseForm = (props) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

 console.log(amount, category)
    const clickHandler= ()=>{}

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
                  {countries.map(option => (
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
                <Button variant="outlined" onClick={clickHandler}>Outlined</Button>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default ExpenseForm