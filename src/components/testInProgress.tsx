import { Answers, Test } from "@/lib/types";
import ProgressBar from "./progress";
import QuestionComponent from "./question";
import QuestionNavigator from "./questionNavigator";
import Timer from "./timer";
import NavigationButtons from "./navigationButtons";

interface TestInProgressProps {
  test: Test;
  currentQuestion: number;
  answers: Answers;
  onSelectAnswer: (questionId: number, answerText: string) => void; // Changed to string
  onNavigate: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
}


const TestInProgress: React.FC<TestInProgressProps> = ({
  test,
  currentQuestion,
  answers,
  onSelectAnswer,
  onNavigate,
  onPrevious,
  onNext,
  onFinish
}) => {
  const currentQ = test.questions[currentQuestion];
  
  const allQuestionsAnswered = test.questions.every(q => answers[q.id] !== undefined);


  return (
    <div className="">
      <div className="max-w-4xl mx-auto ">
        {/* Header */}
        <div className="bg-slate-50 mb-4 p-4 rounded-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800">
              {test.name}
            </h2>
          </div>
          <ProgressBar current={currentQuestion} total={test.questions.length} />
          
          {/* Questions answered indicator */}
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-slate-600">
              Të përgjigjura: {Object.keys(answers).length} / {test.questions.length}
            </span>
            {!allQuestionsAnswered && (
              <span className="text-amber-600 font-medium">
                {test.questions.length - Object.keys(answers).length} pyetje të mbetura
              </span>
            )}
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <QuestionComponent
            question={currentQ}
            selectedAnswer={answers[currentQ.id]}
            onSelectAnswer={(answerText) => onSelectAnswer(currentQ.id, answerText)} // Pass text, not index
          />
        </div>

        {/* Navigation */}
        <div>
            <NavigationButtons
              currentQuestion={currentQuestion}
              totalQuestions={test.questions.length}
              allQuestionsAnswered={allQuestionsAnswered}
              onPrevious={onPrevious}
              onNext={onNext}
              onFinish={onFinish}
            />
          </div>

        {/* Question Navigator */}
        <QuestionNavigator
          questions={test.questions}
          currentQuestion={currentQuestion}
          answers={answers}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
};

export default TestInProgress;
