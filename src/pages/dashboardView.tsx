'use client';

import { Answers, Question, Test } from "@/lib/types";
import { useEffect, useState } from "react";
import TestSelection from "./testSelectionView";
import ResultsScreen from "./resultsView";
import TestInProgress from "@/components/testInProgress";
import { shuffleArray } from "@/lib/utils";
import pyetje from "@/lib/pyetjet";

const DashboardView = () => {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [timeLeft, setTimeLeft] = useState<number>(50 * 60);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  useEffect(() => {
    if (timerActive && timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsFinished(true);
            setTimerActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timerActive, timeLeft, isFinished]);

  const startTest = (test: Test): void => {
  const shuffled = shuffleArray(test.questions);

  setSelectedTest(test);
  setShuffledQuestions(shuffled);
  setCurrentQuestion(0);
  setAnswers({});
  setTimeLeft(50 * 60);
  setIsFinished(false);
  setTimerActive(true);
};

  const selectAnswer = (questionId: number, answerText: string): void => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerText.trim()
    }));
  };

  const finishTest = (): void => {
    setIsFinished(true);
    setTimerActive(false);
  };

  const backToMenu = (): void => {
    setSelectedTest(null);
    setShuffledQuestions([]);
    setCurrentQuestion(0);
    setAnswers({});
    setTimeLeft(50 * 60);
    setIsFinished(false);
    setTimerActive(false);
  };

  if (!selectedTest) {
    return <TestSelection tests={pyetje} onSelectTest={startTest} />;
  }

  if (isFinished) {
    return (
      <ResultsScreen
        test={{ ...selectedTest, questions: shuffledQuestions }}
        answers={answers}
        onBackToMenu={backToMenu}
      />
    );
  }

  return (
    <TestInProgress
      test={{ ...selectedTest, questions: shuffledQuestions }}
      currentQuestion={currentQuestion}
      answers={answers}
      timeLeft={timeLeft}
      onSelectAnswer={selectAnswer}
      onNavigate={setCurrentQuestion}
      onPrevious={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
      onNext={() => setCurrentQuestion(prev => prev + 1)}
      onFinish={finishTest}
    />
  );
};

export default DashboardView;