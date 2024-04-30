import React, { useState, useEffect } from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from "./PlanetsContainer"

function App() {

  const [planets, setPlanets] = useState([])
  const [mode, setMode] = useState(true)

  function toggle_mode(){
    setMode(!mode)
  }
  useEffect(() => {
    console.log('fetching planets...')
    fetch('http://localhost:4001/planets')
    .then(res => res.json())
    .then(data => setPlanets(data))
  }, [])

  return (
    <div className={(!mode) ? "App light-mode" : "App"}>

      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button onClick={toggle_mode}>Light Mode</button>

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
