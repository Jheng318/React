import  Option  from "./Option.js";
export default function Questions({questions, dispatch, answer}){

  return(
    <div>
      <h4>{questions.question}</h4>
      <Option questions={questions} dispatch={dispatch} answer={answer}/>
    </div>
  )
}
