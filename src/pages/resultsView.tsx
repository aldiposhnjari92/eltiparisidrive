import AnswerReview from "@/components/answerReview";
import ScoreDisplay from "@/components/scoreDisplay";
import { Button } from "@/components/ui/button";
import { Test, Answers, Score } from "@/lib/types";

interface ResultsScreenProps {
  test: Test;
  answers: Answers;
  onBackToMenu: () => void;
}

// const ResultsScreen: React.FC<ResultsScreenProps> = ({ test, answers, onBackToMenu }) => {
//   const calculateScore = (): Score => {
//     let correct = 0;
    
//     test.questions.forEach((q) => {
//       const userAnswerText = answers[q.id];
//       const correctAnswerText = q.correctAnswerText || q.options[q.correctAnswer];
      
//       const trimmedUserAnswer = userAnswerText?.trim();
//       const trimmedCorrectAnswer = correctAnswerText?.trim();
      
//       const isCorrect = trimmedUserAnswer === trimmedCorrectAnswer;
      
//       if (isCorrect) {
//         correct++;
//       }
//     });
    
//     const total = test.questions.length;
//     const percentage = Math.round((correct / total) * 100);
    
//     return { correct, total, percentage };
//   };

//   const score = calculateScore();

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <div className="mx-auto">
//         <div className="">
//           <ScoreDisplay
//             correct={score.correct}
//             total={score.total}
//             percentage={score.percentage}
//           />

//           <div className="space-y-4 mb-8">
//             <h3 className="text-xl font-bold text-slate-800">Rishiko përgjigjet</h3>
//             {test.questions.map((q, idx) => (
//               <AnswerReview
//                 key={q.id}
//                 question={q}
//                 index={idx}
//                 userAnswer={answers[q.id]}
//                 correctAnswer={q.correctAnswer}
//               />
//             ))}
//           </div>

//           <Button
//             onClick={onBackToMenu}
//             variant={"outline"}
//             className="w-full"
//           >
//             Shko tek testet
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

const ResultsScreen: React.FC<ResultsScreenProps> = ({ test, answers, onBackToMenu }) => {
  return(<>asd</>)
}

export default ResultsScreen;