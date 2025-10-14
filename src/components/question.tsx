import { Question } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuestionProps {
  question: Question;
  selectedAnswer: string | undefined;
  onSelectAnswer: (answerText: string) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}) => {
  return (
    <div className="bg-slate-50 rounded-xl p-4 mt-4">
      <h3 className="text-lg font-bold text-slate-800 mb-4">
        {question.question}
      </h3>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {question.image && (
          <div className="mb-6 rounded-lg overflow-hidden min-w-[300px]">
            <img
              src={question.image}
              alt="Question illustration"
              className="w-full h-[300px] object-cover aspect-auto"
            />
          </div>
        )}

        {/* Options */}
        <div className="flex-grow flex flex-col gap-3">
          {question.options.map((option, idx) => {
            const trimmedOption = option.trim();
            const isSelected = selectedAnswer === trimmedOption;
            
            return (
              <Card
                key={idx}
                onClick={() => onSelectAnswer(trimmedOption)}
                className={cn(
                  "relative flex flex-row items-center gap-4 rounded-xl border transition-all cursor-pointer p-4",
                  isSelected
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                )}
              >
                <div>
                  <span
                    className={'h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors border-gray-300'}
                  >
                    {isSelected && (
                      <span className="h-2.5 w-2.5 bg-blue-700 rounded-full" />
                    )}
                  </span>
                </div>

                <p className="text-slate-800 text-base leading-snug">
                  <span className="font-semibold mr-1">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {option}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;