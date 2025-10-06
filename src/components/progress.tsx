interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div
          className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-slate-600 mt-2">
        Pyetja e {current + 1} nga <b>{total}</b>
      </p>
    </div>
  );
};

export default ProgressBar;