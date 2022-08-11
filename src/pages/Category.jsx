import React, { useEffect, useState } from 'react'
import Button from "@material-ui/core/Button";
import BasicTable from '../components/Table.jsx';
import CategoryForm from '../components/CategoryForm';
import { getCategoryStart } from '../store/category/categoryActions';
import { useDispatch, useSelector } from 'react-redux';

const Category= (props) => {
  const [openModal,setOpenModal] = useState(false)
  // const [categoryArr, setCategoryArr] = useState([])
  const user = useSelector(state=>state.auth.currentUser.user)
  const dispatch = useDispatch()
  const categoryArr = useSelector(state=>state.category.categoryArr)
  const getCategoryData = async() => {
    dispatch(getCategoryStart(user))
  }
  useEffect(()=>{
    getCategoryData()
  },[openModal])
  return (
    <div style={{padding:20, display:'flex',flexDirection:'column',minHeight:'100vh'}}>
    <div style={{padding:20, display:'flex', justifyContent:'flex-end'}}>
      <Button onClick={()=>setOpenModal(!openModal)}>Add new Category</Button>
    </div>
    <CategoryForm openModal={openModal} setOpenModal={setOpenModal} user={user}/>
    <div>
      <BasicTable data={categoryArr} type='category'/>
    </div>
  </div>
  )
}

export default Category