import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import data from './data'
import Question from './Question'
import SingleQuestion from './Question'

function App() {
  const [myInfo, setMyInfo] = useState(data)
  const [info, setInfo] = useState(false)
  return (
    <main>
      <div className="container">
        <h3>Question And Answer About Login</h3>
        <div className="info">
          {myInfo.map((item) => {
            const { title, info } = item
            return (
              <div>
                <Question key={item.id} {...item} />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
