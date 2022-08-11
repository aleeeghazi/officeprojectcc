import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MonthlyIncome = () => {
    const months = [
        {
            month: 'Jan',
            index: 0,
          
        }, {
            month: 'Feb',
            index: 1,
          
        }, {
            month: 'Mar',
            index: 2,
          
        }, {
            month: 'Apr',
            index: 3,
          
        }, {
            month: 'May',
            index: 4,
          
        }, {
            month: 'Jun',
            index: 5,
          
        }, {
            month: 'Jul',
            index: 6,
          
        }, {
            month: 'Aug',
            index: 7,
          
        }, {
            month: 'Sep',
            index: 8,
          
        }, {
            month: 'Oct',
            index: 9,
          
        }, {
            month: 'Nov',
            index: 10,
          
        },
        {
            month: 'Dec',
            index: 11,
            
        },

    ]
    const incomeArr = useSelector(state=>state.income.incomeArr)
  const a= months.map(month=>{
    return incomeArr.filter(expense=>{
        if(month.index === new Date(expense.date).getMonth()){
            return {
                month,
                amount:expense.amount
            }
        }
    })
  }).map((exp,index)=>{
    let sum=0

    exp.length>0 && exp.map((expenses)=>{
        sum+=expenses.amount
    })

    return{
        name: months[index].month,
        total: sum
    }
  })
  console.log(a)
// /  const data = Object.entries(totalExpenseByMonth).map(([key, value]) => ({
//     name: key,
//     total: value,
//   }));

  return (
    
      <div style={{width:'30vw', height:'50vh',display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h4 style={{padding:30, backgroundColor:'white', borderRadius:15, width:'40%', textAlign:'center'}}> 
          Income by Month
        </h4>
        <ResponsiveContainer>
          <BarChart
            width={450}
            height={250}
            data={a}
        
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" label={true}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    
  );
};
export default MonthlyIncome;