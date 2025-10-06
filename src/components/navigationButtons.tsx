import { Button } from "./ui/button";

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  allQuestionsAnswered: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ 
  currentQuestion, 
  totalQuestions, 
  allQuestionsAnswered,
  onPrevious, 
  onNext, 
  onFinish 
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button
          onClick={onPrevious}
          disabled={currentQuestion === 0}
          className="font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Pyetja e meparshme
        </Button>
        
        {currentQuestion < totalQuestions - 1 ? (
          <Button
            onClick={onNext}
            className="flex-1 font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Pyetja e radhes
          </Button>
        ) : (
          <Button
            onClick={onFinish}
            disabled={!allQuestionsAnswered}
            className="flex-1 font-semibold bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Perfundo testin
          </Button>
        )}
      </div>
      {currentQuestion === totalQuestions - 1 && !allQuestionsAnswered && (
        <p className="text-sm text-red-600 text-center font-medium">
          Ju lutem, përgjigjuni të gjitha pyetjeve para se të përfundoni testin.
        </p>
      )}
    </div>
  );
};

export default NavigationButtons;