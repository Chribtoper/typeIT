import React from 'react'

const Accuracy = (props) => {
  let accuracyPercentage = 0
  let goodWordCount = 0
  let goodWordsArray = []
  let allSubmittedWordsCount = 0

  if(props.appState.state){
    if(props.appState.state.allSubmittedWords.length > 0){

      allSubmittedWordsCount = props.appState.state.allSubmittedWords.length
      goodWordCount = allSubmittedWordsCount.filter((word)=>{
         return word.type.name == "Word"
      }).length

      wordsPerMinCount = (goodWordCount/allSubmittedWords)

    }
  }

  return(


    <div>{charsPerMinCount}</div>
  )
}



export default Accuracy
