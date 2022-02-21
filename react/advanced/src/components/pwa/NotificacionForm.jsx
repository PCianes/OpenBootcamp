import axios from "axios";
import React, { useRef } from "react";
const notificationUrl = 'http://localhost:8000/notification'

export function NotificationForm() {
  const titleRef = useRef('')
  const messageRef = useRef('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(
        notificationUrl,
        {
          title: titleRef.current.value,
          message: messageRef.current.value
        })
    } catch (error) {
      console.log(error)
    }
    titleRef.current.value = ''
    messageRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Custom notification form</h2>
      <input type="text" ref={titleRef} placeholder="Notification title" />
      <input type="text" ref={messageRef} placeholder="Notification message" />
      <button>Submit notification</button>
    </form>
  )
}