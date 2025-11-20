import { useQuiz } from "../contexts/QuizContext";

function FinishedScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "🙃";
  else if (percentage >= 0) emoji = "🤔";
  else emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
