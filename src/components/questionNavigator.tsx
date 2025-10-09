import { Answers, Question } from "@/lib/types";
import { Button } from "./ui/button";

interface QuestionNavigatorProps {
  questions: Question[];
  currentQuestion: number;
  answers: Answers;
  onNavigate: (index: number) => void;
}

const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  currentQuestion,
  answers,
  onNavigate
}) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 px-4 py-3 z-50 shadow-lg max-h-[15dvh] md:max-h-auto overflow-auto">
      {/* <h4 className="text-lg font-semibold text-slate-800 mb-4">
        Lista e pyetjeve
      </h4> */}
      <div className="flex items-start flex-wrap overflox-auto gap-2">
        {questions.map((q, idx) => (
          <Button
            key={q.id}
            onClick={() => onNavigate(idx)}
            className={`font-semibold size-8 transition-all ${
              currentQuestion === idx
                ? "bg-indigo-600 text-white"
                : answers[q.id] !== undefined
                ? "bg-green-200 text-green-700"
                : "bg-slate-200 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {idx + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionNavigator;
