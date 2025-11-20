import { useQuiz } from "../contexts/QuizContext.jsx";
import Option from "./Option.jsx";

export default function Questions() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option question={question} />
    </div>
  );
}
