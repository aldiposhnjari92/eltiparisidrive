import { CheckCircle, XCircle } from "lucide-react";
import { Question } from "@/lib/types";

interface AnswerReviewProps {
  question: Question;
  index: number;
  userAnswer: string | undefined;
  correctAnswer: number;
}

const AnswerReview: React.FC<AnswerReviewProps> = ({ 
  question, 
  index, 
  userAnswer, 
  correctAnswer
}) => {
  const correctAnswerText = (question.correctAnswerText || question.options[correctAnswer]).trim();
  const trimmedUserAnswer = userAnswer?.trim();
  const isCorrect = trimmedUserAnswer === correctAnswerText;
  
  return (
    <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">
          {isCorrect ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600" />
          )}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-800 mb-2">
            {index + 1}. {question.question}
          </p>
          <p className="text-sm text-slate-600">
            Përgjigjia jote: <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
              {trimmedUserAnswer || 'Nuk u përgjigj'}
            </span>
          </p>
          {!isCorrect && (
            <p className="text-sm text-slate-600">
              Përgjigjia e saktë: <span className="text-green-700">{correctAnswerText}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerReview;