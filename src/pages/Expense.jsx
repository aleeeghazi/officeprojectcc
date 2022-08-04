import React, { useEffect, useState } from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseFilter from '../components/ExpenseFilter'
import Button from "@material-ui/core/Button";
import CustomizedTables from '../components/Table';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Expense = (props) => {
  const [expenseArr, setExpenseArr] = useState([])
  const [filteredExpenses, setFilteredExpenses] = useState([])
  const [openModal,setOpenModal] = useState(false)
  const getExpenseData = async() => {
    const res = await axios.get(`http://localhost:5000/api/expense/${props.data.user.userId}`,{
      headers:{
        "auth-token": props.data.user.token
      }
    })
    if(res.status===200){
      setExpenseArr(res.data)
      setFilteredExpenses(res.data)
    }
    console.log(res.data)
  }
  useEffect(()=>{
    getExpenseData()
  },[openModal])
   
  return (
    <div style={{padding:20, display:'flex',flexDirection:'column'}}>
      <div style={{padding:20, display:'flex', justifyContent:'space-between'}}>
        <ExpenseFilter data={expenseArr} setFilteredExpenses={setFilteredExpenses}/>
        <Button onClick={()=>setOpenModal(!openModal)}>Add new expense</Button>

      </div>
      <ExpenseForm openModal={openModal} setOpenModal={setOpenModal} user={props.data.user}/>
      <div>
        <CustomizedTables data={filteredExpenses} type='expense'/>
      </div>
    </div>
  )
}

export default Expense