import { useState } from 'react'
import Calendar from './components/Calendar'
import './App.css'

function App() {
  const [selectedDate, setSelectedDate] = useState(null)


  // a função handleSelectedDate obtem o valor que advem do componente Calendar e salva para utilizar-mos como quisermos
  const handleSelectedDate = (value) => {
    setSelectedDate(value);
    console.log('data', value)
  }

  return (
    <>
      <h1>Vite + React + Antd</h1>
      <h2>Testando os componentes e integrações da lib</h2>
      <Calendar range={['2025-03-03', '2025-03-10']} chosenDate={handleSelectedDate}/>
    </>
  )
}

export default App
