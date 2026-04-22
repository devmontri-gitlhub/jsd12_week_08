import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Castle from "./components/01_Castle";

function App() {
  /* -------------------เริ่ม : ส่วนของการใช้งาน useState ---------------------------- */
  const [initialPokemon, setInitialPokemon] = useState({
    name: "Loading...",
    sprite: "",
  });

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [helpReceived, setHelpReceived] = useState(false);
  const [rescuePokemon, setRescuePokemon] = useState([]);
  const [gamePhase, setGamePhase] = useState("idle");
  const [podProgress, setPodProgress] = useState(0);
  const [showBuildModal, setShowBuildModal] = useState(false);
  /* -------------------จบ : ส่วนของการใช้งาน useState ---------------------------- */

  /* -------------------เริ่ม : ส่วนของการใช้งาน useEffect ---------------------------- */
  useEffect(() => {
    const fetchInitial = async () => {
      const randomId = Math.floor(Math.random() * 151) + 1;
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await res.json();
        setInitialPokemon({
          name: data.name,
          sprite: data.sprites.front_default,
        });
      } catch (e) {
        setInitialPokemon({
          name: "pikachu",
          sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        });
      }
    };
    fetchInitial();
  }, []);

  useEffect(() => {
    if (!helpReceived && /ไข่เยี่ยวม้า/i.test(answer)) {
      setHelpReceived(true);
    }
  }, [answer, helpReceived]);

  useEffect(() => {
    if (gamePhase !== "building") return;
    const timer = setTimeout(() => {
      if (podProgress < 100) {
        setPodProgress((p) => Math.min(p + 4, 100));
      } else {
        setShowBuildModal(false);
        setGamePhase("pod_built");
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [podProgress, gamePhase]);

  useEffect(() => {
    if (gamePhase !== "rescued") return;
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.5 } });
    setTimeout(() => confetti({ particleCount: 150, spread: 120, angle: 60, origin: { y: 0.6 } }), 300);
    setTimeout(() => confetti({ particleCount: 150, spread: 120, angle: 120, origin: { y: 0.6 } }), 600);
  }, [gamePhase]);
  /* -------------------จบ : ส่วนของการใช้งาน useEffect ---------------------------- */

  const allPokemon = [initialPokemon, ...rescuePokemon];

  const vehicle = {
    name: "Escape Pod",
    pokemon: allPokemon,
    isBuilt: ["pod_built", "pod_in_room", "in_pod", "rescued"].includes(gamePhase),
  };

  const handleQuestion = (e) => setQuestion(e.target.value);
  const handleAnswer = (e) => setAnswer(e.target.value);

  const handleCallReinforcements = async () => {
    setGamePhase("fetching");
    const randomIds = Array.from({ length: 3 }, () => Math.floor(Math.random() * 151) + 1);
    try {
      const results = await Promise.all(
        randomIds.map(async (id) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          return res.json();
        })
      );
      setRescuePokemon(
        results.map((p) => ({
          name: p.name,
          sprite: p.sprites.front_default,
        }))
      );
      setGamePhase("reinforcements_ready");
    } catch (error) {
      console.error("Fetch error:", error);
      setGamePhase("idle");
    }
  };

  const handleBuildPod = () => {
    setPodProgress(0);
    setShowBuildModal(true);
    setGamePhase("building");
  };

  const handleSecretRoomAction = () => {
    if (gamePhase === "pod_built") setGamePhase("pod_in_room");
    else if (gamePhase === "pod_in_room") setGamePhase("in_pod");
    else if (gamePhase === "in_pod") setGamePhase("rescued");
  };

  const isRescued = gamePhase === "rescued";

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-indigo-500/30 pb-40">
      
      {/* Header Section */}
      <header className="pt-8 pb-4 text-center space-y-1">
      <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase">
        Mission Control
      </h1>
      <p className="text-slate-500 font-bold tracking-[0.3em] text-[10px] uppercase">
        Sector 01: Outside the Castle
      </p>
    </header>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-y-4">
        
        {/* Pokemon Display Card */}
        <section className="w-full bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h2 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            {vehicle.isBuilt ? `Vessel: ${vehicle.name}` : "Radar: Nearby Units"}
          </h2>

            <div className={`flex gap-4 flex-wrap justify-center p-4 rounded-2xl transition-all duration-500 ${
              vehicle.isBuilt ? "bg-indigo-500/10 border border-indigo-500/20" : "bg-slate-950/50"
            }`}>
            {allPokemon.map((p) => (
              <div key={p.name} className="flex flex-col items-center group">
                <img src={p.sprite} alt={p.name} className="w-16 h-16 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase text-slate-500">{p.name}</span>
              </div>
            ))}
            {isRescued && (
              <div className="flex flex-col items-center animate-bounce">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="mewtwo" className="w-16 h-16 shadow-yellow-500" />
                <span className="text-[10px] font-bold text-yellow-400 uppercase">mewtwo ✓</span>
              </div>
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Action Buttons */}
        <div className="flex flex-col items-center gap-4 min-h-[80px]">
          {helpReceived && gamePhase === "idle" && (
            <button
              onClick={handleCallReinforcements}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              CALL FOR REINFORCEMENTS
            </button>
          )}

          {gamePhase === "fetching" && (
            <p className="text-cyan-400 font-mono text-sm animate-pulse tracking-tighter uppercase font-bold">
              Connecting to PokeAPI...
            </p>
          )}

          {gamePhase === "reinforcements_ready" && (
            <button
              onClick={handleBuildPod}
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-1"
            >
              BUILD ESCAPE POD
            </button>
          )}

          {isRescued && (
            <div className="text-center space-y-4">
              <p className="text-yellow-400 font-black text-2xl tracking-tighter">MISSION COMPLETE!</p>
              <button
                onClick={() => window.location.reload()}
                className="text-slate-500 hover:text-red-400 text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                — Reset System —
              </button>
            </div>
          )}
        </div>

        {/* Message Terminals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-2">
            <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest ml-1">Transmitter</label>
            <textarea
              value={question}
              onChange={handleQuestion}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ring-indigo-500 transition-all resize-none h-24"
              placeholder="Type message..."
            />
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-2">
            <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest ml-1">Receiver</label>
            <div className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 h-24 overflow-y-auto">
              <p className="text-emerald-400 font-mono text-xs leading-relaxed">
                {answer ? `> ${answer}` : "> No signal detected..."}
              </p>
            </div>
          </div>
        </div>

        {/* Castle Component Container */}
        <div className="w-full mt-4 p-4 bg-slate-900/30 rounded-3xl border border-slate-800/50">
          <Castle
            question={question}
            answer={answer}
            handleAnswer={handleAnswer}
            vehicle={vehicle}
            gamePhase={gamePhase}
            handleSecretRoomAction={handleSecretRoomAction}
          />
        </div>
      </div>

      {/* Build Progress Modal */}
      {showBuildModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col items-center gap-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-white font-black text-xl uppercase tracking-tighter">Constructing Pod</h3>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
              <div
                className="bg-indigo-500 h-full transition-all duration-100"
                style={{ width: `${podProgress}%` }}
              />
            </div>
            <p className="text-indigo-400 text-3xl font-black font-mono leading-none">{podProgress}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;