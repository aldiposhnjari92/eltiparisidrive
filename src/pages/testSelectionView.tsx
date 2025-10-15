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
    <div className="flex flex-col lg:max-w-4xl mx-auto flex-grow">
        <div className="text-center py-2">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
            Testi teorik i Lejes se Drejtimit
          </h1>
          <p className="text-base md:text-lg text-slate-600">
            Zgjidhni nje nga testet me poshte per te filluar.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 py-3 items-start justify-start">
          {tests.map(test => (
            <TestCard key={test.id} test={test} onStart={onSelectTest} />
          ))}
        </div>
      </div>
  );
};

export default TestSelection;