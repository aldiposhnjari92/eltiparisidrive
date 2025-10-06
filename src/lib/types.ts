export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  image: string | null;
}

export interface Test {
  id: number;
  name: string;
  questions: Question[];
}

export interface Answers {
  [questionId: number]: number;
}

export interface Score {
  correct: number;
  total: number;
  percentage: number;
}