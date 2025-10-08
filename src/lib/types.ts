export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correctAnswerText?: string; // Add this to track the actual correct answer
  image: string | null;
}

export interface Test {
  id: number;
  name: string;
  questions: Question[];
}

export interface Answers {
  [questionId: number]: string;
}

export interface Score {
  correct: number;
  total: number;
  percentage: number;
}