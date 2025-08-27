import { SplinePointer } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 space-y-4">
      <SplinePointer className="w-12 h-12 animate-spin text-primary" />
      <p className="text-lg font-medium text-muted-foreground">Loading...</p>
    </div>
  );
};

export default Loading;
