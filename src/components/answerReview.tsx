import { CheckCircle, XCircle } from "lucide-react";

interface AnswerReviewProps {
  question: string;
  index: number;
  userAnswer: number | undefined;
  correctAnswer: number;
  options: string[];
}

const AnswerReview: React.FC<AnswerReviewProps> = ({ 
  question, 
  index, 
  userAnswer, 
  correctAnswer, 
  options 
}) => {
  const isCorrect = userAnswer === correctAnswer;
  
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
            {index + 1}. {question}
          </p>
          <p className="text-sm text-slate-600">
            Përgjigjia jote: <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
              {userAnswer !== undefined ? options[userAnswer] : 'Not answered'}
            </span>
          </p>
          {!isCorrect && (
            <p className="text-sm text-slate-600">
              Përgjigjia e saktë: <span className="text-green-700">{options[correctAnswer]}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerReview;