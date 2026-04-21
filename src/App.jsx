import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto pt-16 pb-32 px-6 flex flex-col items-center gap-y-12">
        
        {/* Header Section */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 uppercase">
            Communication Portal
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-indigo-300 font-medium tracking-wide">
              Message for JSD12: 
              <span className="ml-2 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                {question ? question : "Awaiting Input..."}
              </span>
            </p>
          </div>
        </header>

        {/* Input Card */}
        <div className="w-full max-w-lg bg-slate-900/80 p-1 rounded-2xl border border-slate-800 shadow-xl">
          <textarea 
            value={question}
            onChange={handleQuestion}
            className="w-full bg-transparent text-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-slate-600 resize-none min-h-[100px]"
            placeholder="Type your message to the secret room..."
          />
        </div>

        {/* Response Monitor */}
        <div className="flex items-center gap-4 bg-emerald-500/5 border border-emerald-500/20 px-6 py-3 rounded-full">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <p className="text-emerald-400 font-medium">
            Reply from Secret Room:
            <span className="ml-3 text-slate-300 font-normal">
              {answer ? answer : "No signal detected..."}
            </span>
          </p>
        </div>

        {/* Castle Component Area */}
        <div className="w-full flex justify-center mt-8">
          <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
        </div>
        
      </div>
    </div>
  );
}