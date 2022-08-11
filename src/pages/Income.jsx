import React, { useEffect, useState } from 'react'
import IncomeForm from '../components/IncomeForm'
import Button from "@material-ui/core/Button";
import axios from 'axios';
import BasicTable from '../components/Table.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getIncomeStart } from '../store/income/incomeActions';

const Income = (props) => {
  const [openModal,setOpenModal] = useState(false)
  // const [incomeArr, setIncomeArr] = useState([])
  const user = useSelector(state=>state.auth.currentUser.user)
  const incomeArr = useSelector(state=>state.income.incomeArr)
  const dispatch = useDispatch()

  const getIncomeData = async() => {
    dispatch(getIncomeStart(user))
  }
  useEffect(()=>{
    getIncomeData()
  },[openModal])
  return (
    <div style={{padding:20, display:'flex',flexDirection:'column', minHeight:'100vh'}}>
    <div style={{padding:20, display:'flex', justifyContent:'flex-end'}}>
      <Button onClick={()=>setOpenModal(!openModal)}>Add new Income</Button>
    </div>
    <IncomeForm openModal={openModal} setOpenModal={setOpenModal} user={user}/>
    <div>
      <BasicTable data={incomeArr} type='income'/>
    </div>
  </div>
  )
}

export default Income