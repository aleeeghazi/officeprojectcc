
import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ExpenseChart from '../components/ExpenseChart'
import IncomeChart from '../components/IncomeChart'
import MonthlyExpenses from '../components/MonthlyExpenses'
import MonthlyIncome from '../components/MonthlyIncome'
import { getExpenseStart } from '../store/expense/expenseActions'
import { getIncomeStart } from '../store/income/incomeActions'
import { getLoanStart } from '../store/loan/loanActions'


const Dashboard = () => {
  const { state } = useLocation()
  const user = useSelector(state=>state.auth.currentUser.user)
  const loanArr = useSelector(state=>state.loan.loanArr)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getExpenseStart(user))
    dispatch(getIncomeStart(user))
    dispatch(getLoanStart(user))
  },[])

  const today = Date.now()
  const a = () => {
    const b=loanArr.filter((loan)=>{
        return new Date(loan.returnDate).getTime() < today
    })
    return b
  }
console.log('state', state)
  return (
    <div style={{padding:30,display:'flex',flexDirection:'column', minheight:'100vh'}}>
      <div style={{ display: 'flex' ,justifyContent:'space-around'}}>
        <ExpenseChart />
        <MonthlyExpenses />
      </div>
      <div style={{ display: 'flex', marginTop:30,justifyContent:'space-around' }}>
        <IncomeChart />
        <MonthlyIncome />
      </div>
      {a().length> 0 && a().map(loan=>(
        <div style={{marginTop:20}}>
          <Alert severity="error" >{`Return date for the loan ${loan._id} has expired.Please ${loan.loanType ==='income' ? 'repay the loan' : 'retrieve your loan' }  at your earliest convinence`}</Alert>
        </div>
      ))
     
      }
    
    </div>
  )
}

export default Dashboard