import React from 'react'
import PlanetFacts from "./PlanetFacts"
import { useState } from 'react'

function PlanetCard({planet}) {
  const [ toggle, setToggle ] = useState(false)
  
  function handleclick(){
    setToggle(!toggle)
  }
  return (
    <div className="card" onClick={handleclick}>
      <h2>{planet.name}</h2>
      {(!toggle) ?
      <img className={(planet.is_planet) ? null : "not_planet"} src={planet.image} alt={planet.name} />
      :
      <PlanetFacts planet={planet} />}
    </div>
  )
}

export default PlanetCard
