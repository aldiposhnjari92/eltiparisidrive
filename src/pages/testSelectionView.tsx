import TestCard from "@/components/testCard";
import { Test } from "@/lib/types";

interface TestSelectionProps {
  tests: Test[];
  onSelectTest: (test: Test) => void;
}

const TestSelection: React.FC<TestSelectionProps> = ({ tests, onSelectTest }) => {
  if (!tests || !Array.isArray(tests)) {
    return <div>Duke u hapur...</div>;
  }
  return (
    <div className="s">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Testi teorik i Lejes se Drejtimit
          </h1>
          <p className="text-lg text-slate-600">
            Zgjidhni nje nga testet me poshte per te filluar.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {tests.map(test => (
            <TestCard key={test.id} test={test} onStart={onSelectTest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSelection;