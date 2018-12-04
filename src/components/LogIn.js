import React from 'react'

const LogIn = ({handleLogInInput, input, handleLogInSubmit}) => {

  return(

      <form onSubmit={handleLogInSubmit}>
        <label>
          Enter UserName:
          <input
            type='text'
            value={input}
            onChange={event => handleLogInInput(event.target.value)}/>
        </label>
        <input
          type="submit"
          value="Submit"/>
      </form>

  )
}


export default LogIn
