
import React, { useEffect, useState } from 'react'
import ExpenseChart from '../components/ExpenseChart'
import IncomeChart from '../components/IncomeChart'
import MonthlyExpenses from '../components/MonthlyExpenses'
import MonthlyIncome from '../components/MonthlyIncome'


const Dashboard = () => {

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
    </div>
  )
}

export default Dashboard