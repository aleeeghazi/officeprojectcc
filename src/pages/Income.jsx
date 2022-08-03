import React, { useEffect, useState } from 'react'
import IncomeForm from '../components/IncomeForm'
import Button from "@material-ui/core/Button";
import axios from 'axios';
import BasicTable from '../components/IncomeTable.jsx';

const Income = (props) => {
  const [openModal,setOpenModal] = useState(false)
  const [incomeArr, setIncomeArr] = useState([])
  const getIncomeData = async() => {
    const res = await axios.get(`http://localhost:5000/api/income/${props.data.user.userId}`,{
      headers:{
        "auth-token": props.data.user.token
      }
    })
    if(res.status===200){
      setIncomeArr(res.data)
    }
    console.log(res.data)
  }
  useEffect(()=>{
    getIncomeData()
  },[openModal])
  return (
    <div style={{padding:20, display:'flex',flexDirection:'column'}}>
    <div style={{padding:20, display:'flex', justifyContent:'flex-end'}}>
      <Button onClick={()=>setOpenModal(!openModal)}>Add new Income</Button>
    </div>
    <IncomeForm openModal={openModal} setOpenModal={setOpenModal} user={props.data.user}/>
    <div>
      <BasicTable incomeArr={incomeArr}/>
    </div>
  </div>
  )
}

export default Income