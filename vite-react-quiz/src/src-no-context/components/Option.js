export default function Option({questions, dispatch, answer}){
  const hasAndwered = answer !== null
  return(
      <div className="options">
        {questions.options.map((option, index)=>
        <button className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAndwered ? index === questions.correctOption ? 'correct': 'wrong' : ''}`} key={option} onClick={()=>dispatch({type: 'newAnswer', payload: index })} disabled={hasAndwered}>
          
          {option}
        </button>)}
      </div>

  )
}
