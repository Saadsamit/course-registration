import { useEffect, useState } from "react"
import Card from './component/Card';
import Aside from './component/Aside';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('Courses.json')
    .then(res => res.json())
    .then(Courses => setData(Courses))
  },[])
  data.map(myData=>console.log(myData))
  return (
    <>
      <h1 className="text-3xl text-header capitalize text-center font-bold py-9">
      Course Registration
    </h1>
    <div className="flex md:flex-row flex-col-reverse container mx-auto">
      <div className="md:w-3/4 w-full md:pt-0 pt-3">
        <Card/>
      </div>
      <div className="md:w-1/3 w-full">
      <Aside/>
      </div>
    </div>
    </>
  )
}

export default App
