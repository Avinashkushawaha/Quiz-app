import axios from "axios";

const BASE_URL = "https://api.paraheights.com";

/* Health API */
export const checkHealth = async () => {
  const res = await axios.get(
    `${BASE_URL}/edzy-api/hackathon/health`
  );
  return res.data;
};

/* Quiz API (FIXED PATH) */
export const fetchQuiz = async (subject, count) => {
  const res = await axios.post(
    `${BASE_URL}/edzy-api/hackathon/task/quizDetails`,
    {
      examSubjectName: subject,
      numberOfQuestions: count,
    }
  );
  return res.data;
};
