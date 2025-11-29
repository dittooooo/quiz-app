import { useState, useCallback, act } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnsewer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswer) => [...prevUserAnswer, selectedAnswer]);
  },
  []);

  const handleSkipAswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSkipAnswer={handleSkipAswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
