import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="new-release">V2 is here </div>
      <h1>Your AI powered email sender</h1>
      <p>Efficient, secure and built for collaboration</p>
      <div className="action">
        <button style={{background:"white",color:"black"}}>Get started</button>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default Home