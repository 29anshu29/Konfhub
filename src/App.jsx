import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Feature from './Components/feature/Feature'
import Event from './Components/Event/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
  <Navbar/>
  <Banner/>
  <Feature/>
  <Event/>
  </>

  );
}

export default App
