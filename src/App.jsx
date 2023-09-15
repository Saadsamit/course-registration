import { ToastContainer, toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react"
import Card from './component/Card';
import Aside from './component/Aside';
function App() {
  const [data, setData] = useState([])
  const [course, setCourse] = useState([])
  const [Hour, setHour] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(20)
  const [totalPrice, settotalPrice] = useState(0)
  const notify = (text) => toast(text);
  useEffect(()=>{
    fetch('Courses.json')
    .then(res => res.json())
    .then(Courses => setData(Courses))
  },[])
  const handleClick = obj =>{
    const idFind = course.find(id => id.id === obj.id)
    let currentHour = obj.credit
    let currentPrice = obj.price
    if(idFind){
      
      return notify("This is already exist")
    }else{
      course.forEach(totaltHour =>{
        currentHour = currentHour + totaltHour.credit 
        currentPrice = currentPrice + totaltHour.price
      })
      const remaining = 20 - currentHour
      if(remaining < -1 || currentHour > 20){
        return notify("Credit Hour limit is 20")
      }
      setRemainingCredit(remaining)
      setHour(currentHour)
      settotalPrice(currentPrice)
      setCourse([...course,obj])
    }
  }
  return (
    <>
          {notify}
          <ToastContainer />
      <h1 className="text-3xl text-header capitalize text-center font-bold py-9">
      Course Registration
    </h1>
    <div className="flex md:flex-row flex-col-reverse container mx-auto gap-5">
      <div className="md:w-3/4 w-full md:pt-0 pt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pb-5">
        {
          data.map((myData,idx)=><Card 
          key={idx} 
          Course={myData}
          handleClick={handleClick}
          />)
        }
        
      </div>
      <div className="md:w-1/3 w-full">
      <Aside 
      course={course}
      Hour={Hour}
      remainingCredit={remainingCredit}
      totalPrice={totalPrice}
      />
      </div>
    </div>
    </>
  )
}

export default App
