import React from 'react'


const CreateAccount = ({input, handleCreateAccountInput, handleCreateAccountSubmit, handleReturnUserClick}) => {

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
        <button onClick={handleReturnUserClick}>Already a user?</button>

      </div>

    </div>

  )

}

export default CreateAccount
