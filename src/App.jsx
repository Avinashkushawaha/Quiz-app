import { useEffect, useState } from "react";
import { fetchQuiz, checkHealth } from "./services/api";

import StartScreen from "./components/StartScreen";
import LoadingScreen from "./components/LoadingScreen";
import QuizQuestion from "./components/QuizQuestion";
import SummaryScreen from "./components/SummaryScreen";

const App = () => {
  const [status, setStatus] = useState("START");
  const [subject, setSubject] = useState("");
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  // Health Check
  useEffect(() => {
    checkHealth().catch(() => alert("API not available"));
  }, []);

  const startQuiz = async () => {
    try {
      setStatus("LOADING");

      const data = await fetchQuiz(subject, count);

      // ✅ FIXED HERE
      setQuestions(data.data.questions);

      setStatus("QUIZ");
    } catch (err) {
      console.error(err);
      alert("Failed to load quiz");
      setStatus("START");
    }
  };

  const correct = () => {
    setScore((s) => s + 1);

    if (current + 1 === questions.length) {
      setStatus("SUMMARY");
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const wrong = () => {
    setWrongAttempts((w) => w + 1);
    alert("Wrong answer! Try again.");
  };

  const restart = () => {
    setStatus("START");
    setCurrent(0);
    setScore(0);
    setWrongAttempts(0);
    setSubject("");
    setCount(0);
  };

  if (status === "START")
    return (
      <StartScreen
        subject={subject}
        setSubject={setSubject}
        count={count}
        setCount={setCount}
        onStart={startQuiz}
      />
    );

  if (status === "LOADING") return <LoadingScreen />;

  if (status === "QUIZ")
    return (
      <QuizQuestion
        question={questions[current]}
        index={current}
        total={questions.length}
        onCorrect={correct}
        onWrong={wrong}
      />
    );

  return (
    <SummaryScreen
      score={score}
      total={questions.length}
      wrongAttempts={wrongAttempts}
      onRestart={restart}
    />
  );
};

export default App;
