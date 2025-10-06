import { CheckCircle, XCircle } from "lucide-react";

interface ScoreDisplayProps {
  correct: number;
  total: number;
  percentage: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ correct, total, percentage }) => {
  const passed = percentage >= 80;

  return (
    <div className="text-center mb-4 max-w-4xl mx-auto">
      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${passed ? 'bg-green-100' : 'bg-red-100'}`}>
        {passed ? (
          <CheckCircle className="w-12 h-12 text-green-600" />
        ) : (
          <XCircle className="w-12 h-12 text-red-600" />
        )}
      </div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">
        {passed ? 'Përgëzime' : 'Testi përfundoi'}
      </h2>
      <p className="text-lg text-slate-600">
        {passed ? 'Ti e kalove testin me sukses' : 'Provo përsëri për të kaluar.'}
      </p>

      <div className="bg-slate-50 rounded-lg p-6 mt-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-indigo-600">
              {correct}
            </div>
            <div className="text-slate-600">Përgjigje të sakta</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-600">
              {total}
            </div>
            <div className="text-slate-600">Pyetje në total</div>
          </div>
          <div>
            <div className={`text-3xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {percentage}%
            </div>
            <div className="text-slate-600">Rezultati</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScoreDisplay;