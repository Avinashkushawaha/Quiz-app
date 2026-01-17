import { SUBJECTS, QUESTION_COUNTS } from "../utils/constants";

const StartScreen = ({ subject, setSubject, count, setCount, onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Start Quiz</h2>

        <select
          className="w-full border p-2 rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select
          className="w-full border p-2 rounded"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          <option value="">Number of Questions</option>
          {QUESTION_COUNTS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button
          disabled={!subject || !count}
          onClick={onStart}
          className="w-full bg-blue-600 text-white py-2 rounded
                     hover:bg-blue-700 disabled:opacity-50"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
