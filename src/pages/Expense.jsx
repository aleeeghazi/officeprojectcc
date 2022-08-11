import React, { useEffect, useState } from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseFilter from '../components/ExpenseFilter'
import Button from "@material-ui/core/Button";
import CustomizedTables from '../components/Table';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenseStart } from '../store/expense/expenseActions';


const Expense = (props) => {
  // const [expenseArr, setExpenseArr] = useState([])
  const [filteredExpenses, setFilteredExpenses] = useState([])
  const [openModal,setOpenModal] = useState(false)
  const user = useSelector(state=>state.auth.currentUser.user)
  console.log('========',user)
  const expenseArr = useSelector(state=>state.expense.expenseArr)
  const dispatch = useDispatch()
  const getExpenseData = async() => {

    dispatch(getExpenseStart(user))
  }
  useEffect(()=>{
    getExpenseData()
  },[openModal])

   useEffect(()=>{
      if(expenseArr.length){
        setFilteredExpenses(expenseArr)
      }
   }, [expenseArr])



   
  return (
    <div style={{padding:20, display:'flex',flexDirection:'column', minHeight:'100vh'}}>
      <div style={{padding:20, display:'flex', justifyContent:'space-between'}}>
        <ExpenseFilter data={expenseArr} setFilteredExpenses={setFilteredExpenses}/>
        <Button onClick={()=>setOpenModal(!openModal)}>Add new expense</Button>

      </div>
      <ExpenseForm openModal={openModal} setOpenModal={setOpenModal} user={user} />
      <div>
        <CustomizedTables data={filteredExpenses} type='expense' openModal={openModal} setOpenModal={setOpenModal} user={user} />
      </div>
    </div>
  )
}

export default Expense