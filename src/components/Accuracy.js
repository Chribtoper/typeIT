import React from 'react'

const Accuracy = (props) => {
  let accuracyPercentage = 0
  let goodWordCount = 0
  let goodWordsArray = []
  let allSubmittedWordsCount = 0

  if(props.appState.state){
    if(props.appState.state.allSubmittedWords.length > 0){

      allSubmittedWordsCount = props.appState.state.allSubmittedWords.length
      goodWordCount = props.appState.state.allSubmittedWords.filter((word)=>{
         return word.type.name == "Word"
      }).length

      accuracyPercentage = (goodWordCount/allSubmittedWordsCount)*100

    }
  }

  return(


    <div id="accuracy">{accuracyPercentage}</div>
  )
}



export default Accuracy
