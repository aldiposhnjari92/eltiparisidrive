import { Test } from "@/lib/types";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

interface TestCardProps {
  test: Test;
  onStart: (test: Test) => void;
}

const TestCard: React.FC<TestCardProps> = ({ test, onStart }) => {
  return (
    <div
      className="border-2 border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-800 trnsition-all min-w-[220px]"
      onClick={() => onStart(test)}
    >
      <div className="flex flex-col items-center mb-4">
        <FileText size={32} className="text-blue-700 mb-2" />
        <h3 className="text-xl font-bold text-slate-800 text-center">
            {test.name}
          </h3>
          <p className="text-slate-600 text-center">
            {test.questions.length} Pyetje
          </p>
      </div>
      
      <Button className="w-full cursor-pointer" variant={"outline"}>
        Fillo testin
      </Button>
    </div>
  );
};

export default TestCard;    