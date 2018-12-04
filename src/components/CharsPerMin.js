import React from 'react'

const CharsPerMin = (props) => {
  let charsPerMinCount = 0
  let goodWords = 0
  let goodWordsArray = []

  if(props.appState.state){
    if(props.appState.state.allSubmittedWords.length > 0){

      const allSubmittedWordsVar = props.appState.state.allSubmittedWords
       goodWords = allSubmittedWordsVar.filter((word)=>{
         return word.type.name == "Word"
      })
      goodWordsArray = goodWords.map((word)=>{
        return word.props.input
      })

      charsPerMinCount = goodWordsArray.join("").length
    }
  }


  return(


    <div>{charsPerMinCount}</div>
  )
}

export default CharsPerMin
