import React from 'react'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <div className="new-release">V2 is here </div>
      <h1>Your AI powered email sender</h1>
      <p>Efficient, secure and built for collaboration</p>
      <div className="action">
        <button style={{background:"white",color:"black"}}
        onClick={()=>navigate("/send")}
        >Get started</button>
        <button>Learn More</button>
      </div>
      {/* <div className="mailbox"></div> */}
    </div>
  )
}

export default Home