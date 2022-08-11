import { Grid, MenuItem, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";


const ExpenseFilter = (props) => {
    const [filter, setFilter] = useState('')
   

 const filterResults = () => {
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDate()
    let currentYear = currentDate.getFullYear()
    console.log(props.data)

    switch (filter) {
        case 'day':
          const todayExpenses = props.data.filter(
            expense =>{
              console.log(expense.date,new Date(expense.date).getDate(), currentDay)
              return new Date(expense.date).getMonth() === currentMonth &&
              new Date(expense.date).getDate() === currentDay &&
              new Date(expense.date).getFullYear() === currentYear
            }
          )
          console.log('te',todayExpenses)
          props.setFilteredExpenses(todayExpenses)
          break
        case 'month':
          const monthExpenses = props.data.filter(
            expense =>
            new Date(expense.date).getMonth() === currentMonth &&  new Date(expense.date).getFullYear()=== currentYear
          )
          console.log('me',monthExpenses)
          props.setFilteredExpenses(monthExpenses)
          break
        case 'year':
          const yearExpenses = props.data.filter(
            expense => new Date(expense.date).getFullYear() === currentYear
          )
          console.log('ye',yearExpenses)

          props.setFilteredExpenses(yearExpenses)
          break
        default:
          props.setFilteredExpenses(props.data)
      }
 }

    useEffect(()=>{
        if(filter){
            console.log("hi")
            filterResults()
        }
    }, [filter])
    const filterValues = [
        {
            value: "day",
            label: "Day"
          },
          {
            value: "month",
            label: "Month"
          },
          {
            value: "year",
            label: "Year"
          },
    ]
    return (
        <div>
           
                <TextField
                  style={{ marginTop: 20, width:'130%'}}
                  label="Filter"
                  fullWidth
                  select
                  variant="outlined"
                  value={filter}
                  onChange={(e)=>setFilter(e.target.value)}
                  id="filter"
                  margin="dense"
                  
                >
                  {filterValues.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>


        </div>
    )
}

export default ExpenseFilter