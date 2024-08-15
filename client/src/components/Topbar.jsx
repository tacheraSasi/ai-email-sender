import React from 'react'
import { Share2,MailQuestion } from 'lucide-react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbar'>
      <Link className="logo" to='/' style={{color:'white'}}>
        <img src="/ai.png"/>
        <span>InboxAi</span>
      </Link>
      <div className="topbar-utils">
        <button>
            <Share2 />
        </button>
        <button>
            <MailQuestion />
        </button>
      </div>
    </div>
  )
}

export default Topbar
