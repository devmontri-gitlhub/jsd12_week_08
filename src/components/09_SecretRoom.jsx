export default function SecretRoom({
  question,
  answer,
  handleAnswer,
  vehicle,
  gamePhase,
  handleSecretRoomAction,
}) {
  const isRescued = gamePhase === "rescued";
  const podIsHere = ["pod_in_room", "in_pod", "rescued"].includes(gamePhase);

  const secretButtonConfig = {
    pod_built: { label: "Call the Pod!", color: "bg-purple-600 hover:bg-purple-500 shadow-purple-900/50" },
    pod_in_room: { label: "Enter the Pod!", color: "bg-blue-600 hover:bg-blue-500 shadow-blue-900/50" },
    in_pod: { label: "Transport Outside!", color: "bg-yellow-500 hover:bg-yellow-400 text-black shadow-yellow-900/50" },
  }[gamePhase];

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-y-6 bg-gray-700 w-full rounded-[1rem] border-[16px] border-gray-900 shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#262626] relative">
      
      {/* Laser Grid Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#f00 1px, transparent 1px), linear-gradient(90deg, #f00 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <h1 className="text-xs font-black uppercase tracking-[0.8em] text-gray-500 mb-2 z-10">
        Vault: Classified Area
      </h1>

      {/* The captive character Section */}
      {!isRescued ? (
        <div className="flex flex-col items-center gap-4 border-2 border-red-500/50 bg-black/40 backdrop-blur-sm rounded-3xl p-6 shadow-[0_0_15px_rgba(239,68,68,0.2)] z-10">
          <p className="text-red-400 font-bold text-xs animate-pulse tracking-tight">
            {gamePhase === "in_pod" ? "INITIATING BOARDING..." : "CONTAINMENT CRITICAL"}
          </p>
          <div className="relative">
             <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                alt="Mewtwo"
                className={`w-32 h-32 transition-all duration-700 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)] ${
                  gamePhase === "in_pod" ? "opacity-10 scale-50 rotate-12" : "grayscale contrast-125"
                }`}
              />
              {/* Scanning line effect */}
              {gamePhase !== "in_pod" && <div className="absolute inset-0 w-full h-1 bg-red-500/50 shadow-[0_0_10px_red] animate-scan opacity-30"></div>}
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Subject: Mewtwo</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 py-10 z-10">
          <div className="w-16 h-16 rounded-full border-2 border-green-500/30 flex items-center justify-center animate-ping absolute"></div>
          <p className="text-green-400 font-black text-xl tracking-tighter">CONTAINMENT BREACHED</p>
          <p className="text-gray-500 text-[10px] uppercase font-bold italic">Status: Empty / Rescued</p>
        </div>
      )}

      {/* The Escape Pod Section */}
      {podIsHere && !isRescued && (
        <div className="flex flex-col items-center gap-4 border-2 border-yellow-500/50 rounded-2xl p-4 w-[90%] bg-slate-900/80 backdrop-blur-md shadow-2xl z-10 transition-all">
          <p className="text-yellow-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></span>
            {vehicle.name} Docked
          </p>
          <div className="flex gap-4 flex-wrap justify-center bg-black/20 p-3 rounded-xl w-full">
            {vehicle.pokemon.map((p) => (
              <div key={p.name} className="flex flex-col items-center group">
                <img src={p.sprite} alt={p.name} className="w-10 h-10 group-hover:scale-110 transition-transform" />
                <span className="text-[8px] font-bold uppercase text-gray-400">{p.name}</span>
              </div>
            ))}
            {gamePhase === "in_pod" && (
              <div className="flex flex-col items-center animate-pulse">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="mewtwo" className="w-10 h-10 drop-shadow-[0_0_5px_cyan]" />
                <span className="text-[8px] font-bold text-cyan-400 uppercase">Boarded</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Morphing Action Button */}
      {secretButtonConfig && (
        <button
          onClick={handleSecretRoomAction}
          className={`px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg transition-all active:scale-95 z-10 ${secretButtonConfig.color}`}
        >
          {secretButtonConfig.label}
        </button>
      )}

      {/* Message Terminal Section */}
      <div className="w-[90%] space-y-3 z-10 bg-black/30 p-4 rounded-2xl border border-gray-600/30">
        <div className="flex justify-between items-center px-1">
            <span className="text-[9px] font-bold text-purple-400 uppercase tracking-tighter">Inbound Signal</span>
            <span className="text-[9px] font-mono text-gray-500">SECURE_CHANNEL_09</span>
        </div>
        <p className="text-xs bg-gray-900/80 p-3 rounded-lg border border-gray-800 text-yellow-200 font-mono italic">
           {question ? `> ${question}` : "> Waiting for signal..."}
        </p>
        
        <textarea
          className="w-full bg-black/50 text-green-400 font-mono text-xs rounded-lg px-3 py-2 border border-gray-800 focus:border-green-500/50 outline-none transition-all resize-none"
          rows="2"
          value={answer}
          onChange={handleAnswer}
          placeholder="Enter response code..."
        />
      </div>

    </div>
  );
}