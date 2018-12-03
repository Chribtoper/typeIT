import React from 'react'


const CreateAccount = ({input, handleCreateAccountInput, handleCreateAccountSubmit, loggedIn, handleReturnUser}) => {

  return(
    <div>
      <form onSubmit={handleCreateAccountSubmit}>
        <label>
          Create User Name:
          <input
            type='text'
            value={input}
            onChange={event => handleCreateAccountInput(event.target.value)}/>
        </label>
        <input
          type="submit"
          value="Submit"/>
      </form>
      <div>
        <button onClick={handleReturnUser}>Already a user?</button>

      </div>

    </div>

  )

}

export default CreateAccount
