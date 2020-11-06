import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [infos, setInfos] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setInfos(!infos)}>
          {infos ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <h4>{infos && info}</h4>
    </article>
  )
}

export default Question
