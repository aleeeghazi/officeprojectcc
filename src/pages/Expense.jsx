import React, { useState } from 'react'
import ExpenseForm from '../components/ExpenseForm'

const Expense = () => {
    const [openModal,setOpenModal] = useState(false)
  return (
    <div>
        <button onClick={()=>setOpenModal(!openModal)}>click</button>
        <ExpenseForm openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

export default Expense