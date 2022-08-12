import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoanForm from '../components/LoanForm'
import BasicTable from '../components/Table'
import { getLoanStart } from '../store/loan/loanActions'

const Loan = () => {
    const [openModal, setOpenModal] = useState(false)
    const loanArr = useSelector(state=>state.loan.loanArr)
    const user = useSelector(state=>state.auth.currentUser.user)
    const dispatch = useDispatch()

    const getLoanData = () => {
        dispatch(getLoanStart(user))
    }
    useEffect(()=>{
        getLoanData()
    },[openModal])
    return (
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ padding: 20, display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={() => setOpenModal(!openModal)}>Add new Loan</Button>
            </div>

            <LoanForm openModal={openModal} setOpenModal={setOpenModal} />
            <div>
                <BasicTable data={loanArr} type='loan' />
            </div>


            {/* <div style={{padding:20, display:'flex', justifyContent:'space-between'}}>
      <ExpenseFilter data={expenseArr} setFilteredExpenses={setFilteredExpenses}/>
      <Button onClick={()=>setOpenModal(!openModal)}>Add new expense</Button>

    </div>
    <ExpenseForm openModal={openModal} setOpenModal={setOpenModal} user={user} />
    <div>
      <CustomizedTables data={filteredExpenses} type='expense' openModal={openModal} setOpenModal={setOpenModal} user={user} />
    </div> */}
        </div>
    )
}

export default Loan