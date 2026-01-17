// /**
//  * @typedef {Object} QuizQuestion
//  * @property {string} question - The question text
//  * @property {string[]} options - Array of answer options
//  * @property {number} correctAnswer - Index of the correct answer
//  */

// /**
//  * @typedef {Object} QuizData
//  * @property {QuizQuestion[]} questions - Array of quiz questions
//  */

// /**
//  * @typedef {Object} QuizAttempt
//  * @property {number} questionIndex - Index of the question
//  * @property {number} attempts - Number of attempts made
//  * @property {boolean} correctOnFirstTry - Whether answered correctly on first try
//  */

// export {};

export const QuizStatus = {
  START: "START",
  LOADING: "LOADING",
  QUIZ: "QUIZ",
  SUMMARY: "SUMMARY",
};
