import { Question } from "@/lib/types";
import { Button } from "./ui/button";

interface QuestionProps {
  question: Question;
  selectedAnswer: number | undefined;
  onSelectAnswer: (answerIdx: number) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="bg-slate-50 rounded-xl p-4 mt-4">
      <h3 className="text-lg font-bold text-slate-800 mb-4">
        {question.question}
      </h3>

      <div className="flex items-center gap-8">
        {question.image && (
          <div className="mb-6 rounded-lg overflow-hidden w-1/3">
            <img
              src={question.image}
              alt="Question illustration"
              className="w-full h-[320px] object-cover"
            />
          </div>
        )}

      <div className="flex-grow">
        {question.options.map((option, idx) => (
          <Button
            key={idx}
            onClick={() => onSelectAnswer(idx)}
            className={`w-full text-base justify-start ${
              selectedAnswer === idx
                ? ''
                : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
            }`}
          >
            <span className="font-semibold mr-3">
              {String.fromCharCode(65 + idx)}.
            </span>
            {option}
          </Button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
