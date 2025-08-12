import { ENV } from "./config/env";

import AdBar from "./components/AdBar";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center">
      <div className="text-center space-y-2 flex-1 flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold">{ENV.appName}</h1>
          <p className="opacity-70">Sewing/Tailoring MVP scaffold ready.</p>
        </div>
      </div>
      <footer className="w-full">
        <div className="max-w-5xl mx-auto px-4">
          {/* @ts-expect-error react-refresh typing */}
          <AdBar />
        </div>
      </footer>
    </div>
  );
}
