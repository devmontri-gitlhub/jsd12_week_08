

export default function SecretRoom({ question, answer, handleAnswer }) {
    return (
        <div className="flex flex-col items-center p-8 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 w-[95%] max-w-2xl transition-all duration-300 hover:shadow-indigo-500/10">
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-100 uppercase">Secret Room</h1>
            </div>

            {/* Message Display Area */}
            <div className="w-full bg-slate-900/50 rounded-lg p-5 border border-slate-700 mb-6">
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
                    Incoming Message
                </p>
                <span className="text-lg text-slate-300 italic">
                    "{question ? question : "Waiting for signal..."}"
                </span>
            </div>

            {/* Input Section */}
            <div className="w-full space-y-4">
                <label className="block text-sm font-medium text-slate-400 ml-1">
                    Your Response
                </label>
                <textarea
                    value={answer}
                    onChange={handleAnswer}
                    className="w-full min-h-[120px] bg-slate-900 text-slate-200 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 resize-none"
                    placeholder="Encrypt your message here..."
                />
            </div>

            {/* Footer / Status Area */}
            <div className="w-full mt-6 pt-6 border-t border-slate-700/50 flex flex-col items-start">
                <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-emerald-400">
                        Status: <span className="text-slate-400 font-normal">Transmitting...</span>
                    </p>
                </div>
                <div className="mt-2 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 w-full">
                    <p className="text-sm text-emerald-300">
                        <span className="font-bold mr-2">Preview:</span>
                        {answer ? answer : "No data to send."}
                    </p>
                </div>
            </div>
        </div>
    );
}