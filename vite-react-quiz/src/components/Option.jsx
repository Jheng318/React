import { useQuiz } from "../contexts/QuizContext";

export default function Option({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAndwered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAndwered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAndwered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
