'use client';

import { Answers, Question, Test } from "@/lib/types";
import { useState } from "react";
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
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const startTest = (test: Test): void => {
    const shuffled = shuffleArray(test.questions);

    setSelectedTest(test);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setAnswers({});
    setIsFinished(false);
  };

  const selectAnswer = (questionId: number, answerText: string): void => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerText.trim(),
    }));
  };

  const finishTest = (): void => {
    setIsFinished(true);
  };

  const backToMenu = (): void => {
    setSelectedTest(null);
    setShuffledQuestions([]);
    setCurrentQuestion(0);
    setAnswers({});
    setIsFinished(false);
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
      onSelectAnswer={selectAnswer}
      onNavigate={setCurrentQuestion}
      onPrevious={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
      onNext={() => setCurrentQuestion(prev => prev + 1)}
      onFinish={finishTest}
    />
  );
};

export default DashboardView;
