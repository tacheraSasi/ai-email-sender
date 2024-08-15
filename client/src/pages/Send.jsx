import { SendHorizontal, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import Loader from '../components/Loader'

const Send = () => {
  const [isLoading, setIsLoading] = useState(false)
  

  const formOnSubmit = (e)=>{
    e.preventDefault()
    console.log(e)
    console.log("submitted")
    setIsLoading(true)
  }
  return (
    <div className='send'>
      <h1>Send AI enhanced emails</h1>
      <form  onSubmit={()=>{formOnSubmit(e)}}>
        <input 
          type="text" 
          placeholder='Send to'/>
        <input 
          type="text" 
          placeholder='From:'/>
        <textarea  
          rows="6" 
          placeholder='Subject'></textarea>
        <button type='submit'><Sparkles />  Enhance {isLoading&&<Loader/>}</button>
        {/* <button type='submit'><SendHorizontal />  send</button> */}
      </form>
    </div>
  )
}

export default Send
