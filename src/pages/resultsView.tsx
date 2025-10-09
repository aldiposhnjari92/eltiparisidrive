import AnswerReview from "@/components/answerReview";
import ScoreDisplay from "@/components/scoreDisplay";
import { Button } from "@/components/ui/button";
import { Test, Answers, Score } from "@/lib/types";

interface ResultsScreenProps {
  test?: Test;
  answers: Answers;
  onBackToMenu: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ test, answers, onBackToMenu }) => {
  if (!test || !test.questions) {
    return <div>Duke u hapur...</div>;
  }

  const calculateScore = (): Score => {
    let correct = 0;

    test.questions.forEach((q) => {
      const userAnswerText = answers[q.id];
      const correctAnswerText = q.correctAnswerText || q.options[q.correctAnswer];

      const trimmedUserAnswer = userAnswerText?.trim();
      const trimmedCorrectAnswer = correctAnswerText?.trim();

      if (trimmedUserAnswer === trimmedCorrectAnswer) {
        correct++;
      }
    });

    const total = test.questions.length;
    const percentage = Math.round((correct / total) * 100);

    return { correct, total, percentage };
  };

  const score = calculateScore();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <ScoreDisplay
        correct={score.correct}
        total={score.total}
        percentage={score.percentage}
      />

      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-bold text-slate-800">Rishiko përgjigjet</h3>
        {test.questions.map((q, idx) => (
          <AnswerReview
            key={q.id}
            question={q}
            index={idx}
            userAnswer={answers[q.id]}
            correctAnswer={q.correctAnswer}
          />
        ))}
      </div>

      <Button onClick={onBackToMenu} variant="outline" className="w-full">
        Shko tek testet
      </Button>
    </div>
  );
};

export default ResultsScreen;
