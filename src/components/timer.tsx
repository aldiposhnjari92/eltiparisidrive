import { Clock } from "lucide-react";

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2 text-lg font-semibold text-slate-700">
      <Clock className="w-5 h-5" />
      <span className={timeLeft < 300 ? 'text-red-600' : ''}>
        {formatTime(timeLeft)}
      </span>
    </div>
  );
};

export default Timer