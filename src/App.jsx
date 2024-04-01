// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import SignInOne from './components/SignInOne.jsx'


function App() {
  // const [count, setCount] = useState(0)
  let img = "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const img2 = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  return (
    <>
      faizan hussain
      <h1 className='bg-green-400 text-blackp-4 rounded-xl mb-4'>Tailwind test</h1>
      <SignInOne />
      <Card username = "Faizan" btnText = "Click me" IMG = {img}/>
      <Card username = "Clark" />
      <Card username = "Omais" btnText='I am Omais' IMG = {img2} />
    </>
  )
}

export default App
