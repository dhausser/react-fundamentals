// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [error, setError] = React.useState('')
  const userInputRef = React.useRef()
  function handleSubmit(event) {
    event.preventDefault()
    const user = userInputRef.current.value
    onSubmitUsername(user)
  }

  function handleChange(event) {
    const isLowerCase = event.target.value === event.target.value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={userInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div style={{ color: 'red' }}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
