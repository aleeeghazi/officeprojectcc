import React, { useEffect, useState } from 'react'
import IncomeForm from '../components/IncomeForm'
import Button from "@material-ui/core/Button";
import axios from 'axios';
import BasicTable from '../components/Table.jsx';
import CategoryForm from '../components/CategoryForm';

const Category= (props) => {
  const [openModal,setOpenModal] = useState(false)
  const [categoryArr, setCategoryArr] = useState([])
  const getCategoryData = async() => {
    const res = await axios.get(`http://localhost:5000/api/category/${props.data.user.userId}`,{
      headers:{
        "auth-token": props.data.user.token
      }
    })
    if(res.status===200){
      setCategoryArr(res.data)
    }
    console.log(res.data)
  }
  useEffect(()=>{
    getCategoryData()
  },[openModal])
  return (
    <div style={{padding:20, display:'flex',flexDirection:'column'}}>
    <div style={{padding:20, display:'flex', justifyContent:'flex-end'}}>
      <Button onClick={()=>setOpenModal(!openModal)}>Add new Category</Button>
    </div>
    <CategoryForm openModal={openModal} setOpenModal={setOpenModal} user={props.data.user}/>
    <div>
      <BasicTable data={categoryArr} type='category'/>
    </div>
  </div>
  )
}

export default Category