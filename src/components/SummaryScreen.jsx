const SummaryScreen = ({ score, total, wrongAttempts, onRestart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center space-y-4">
        <h2 className="text-2xl font-bold">Quiz Summary</h2>

        <p className="text-lg">
          Score: <span className="font-semibold">{score}</span> / {total}
        </p>

        <p className="text-red-600">
          Incorrect Attempts: {wrongAttempts}
        </p>

        <button
          onClick={onRestart}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Reattempt Quiz
        </button>
      </div>
    </div>
  );
};

export default SummaryScreen;
