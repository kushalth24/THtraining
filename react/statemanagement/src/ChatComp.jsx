import React, { useState } from 'react'

const ChatComp = ({contact}) => {
    const[chat, setChat]=useState("");

  return (
    <section className="chat">
      <textarea
        value={chat}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setChat(e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  )
}

export default ChatComp
