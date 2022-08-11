import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Pie, PieChart,Cell } from 'recharts'

const ExpenseChart= () => {
  const expenseArr = useSelector(state=>state.expense.expenseArr)
  const user = useSelector(state=>state.auth.currentUser.user)
  const [categoryOptions, setCategoryOptions] = useState([]);

console.log(expenseArr)
const renderLabel = (entry) => entry.key;
const COLORS = [
  "#00C49F",
  "#FCC2D7",
  "#A61E4D",
  "#3BC9DB",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#FFD43B",
];
const getUserCategories = async () =>{
  const res = await axios.get(`http://localhost:5000/api/category/${user.userId}/expense`,data,{
    headers:{
      "auth-token": user.token
    }
  })
  if(res.status===200){
    setCategoryOptions(res.data)
  }
}
useEffect(()=>{
    getUserCategories()
}, [])


  const data = expenseArr.map(({amount, category})=>{
    return {
      key: category?.name,
      value: amount
    }
  })

 const a = categoryOptions.map(category=>{
    return data.filter(data=>category.name===data.key)
 })

 const b = a.map((input)=>{
    let sum=0
    let key=null
    input.map(i=>{
      sum+=i.value
      key=i.key
    })
    return{
      key,
      value:sum
    }
 })
  console.log(data)
  console.log(a)
  console.log(categoryOptions)
  console.log(b)
  return (
    <div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h4 style={{padding:30, backgroundColor:'white', borderRadius:15, width:'40%', textAlign:'center'}}>Expenses by category</h4>
        <PieChart width={500} height={300}>
            <Pie
              data={b}
              cx={180}
              cy={150}
              labelLine={true}
              outerRadius={80}
              label={renderLabel}
              fill="#8884d8"
              dataKey="value"
            >
              {b.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
      </div>
    </div>
  )
}

export default ExpenseChart