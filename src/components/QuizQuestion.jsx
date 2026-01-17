import useTimer from "../hooks/useTimer";

const QuizQuestion = ({ question, index, total, onCorrect, onWrong }) => {
  const time = useTimer(index);

  const handleClick = (optionId) => {
    // ✅ FIXED HERE
    if (optionId === question.questionInfo.option) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Question {index + 1} of {total}</span>
          <span>⏱ {time}s</span>
        </div>

        <h3 className="text-lg font-semibold">{question.text}</h3>

        <div className="space-y-2">
          {question.optionOrdering.map((opt) => (
            <button
              key={opt._id}
              onClick={() => handleClick(opt._id)}
              className="w-full border rounded p-2 hover:bg-blue-50"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
