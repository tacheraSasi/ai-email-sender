import React from 'react'
import { Share2,MailQuestion } from 'lucide-react'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="logo">
        <img src="/ai.png"/>
        <span>InboxAi</span>
      </div>
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
