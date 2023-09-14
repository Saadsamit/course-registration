import { useEffect, useState } from "react"

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
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className="btn btn-success">Success</button>
    </>
  )
}

export default App
