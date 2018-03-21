import React from 'react'



const toastOnStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '25px 10px 25px 10px'
}

const setMessage = (message) => {
  const toastMessage = localStorage.getItem('toastMessage')
  // console.log('toastMessage', toastMessage)
  if (toastMessage) {
    switch (toastMessage) {
      case 'protectedPage':
        return 'You must be logged-in to access that page'
      default:
        return message
    }
  }
  return message

}
const Toast = ({ message }) => {
  const finalMessage = setMessage(message)

  // console.log('message', message)
  // console.log('finalMessage', finalMessage)

  const toast = finalMessage ? `Message: ${finalMessage}` : null
  const toastStyle = finalMessage ? toastOnStyle : {}

  return (
    <div style={toastStyle} >
      {toast}
    </div>
  )
}
export default Toast