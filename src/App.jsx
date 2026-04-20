import Castle from "./components/Castle";

export default function App() {
  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
    <p class="text-purple-300">
      Message for JSD12
    <span className="text-yellow-300">
      {/*  question or waiting for a message */}
    </span>
    </p>
    <textarea 
    value="Banan"
    onClhange=""
    className="bg-white text-black rounded px-2 py-1"
    placeholder="Type your message here. . ."
    />
    <p className="text-green-300">Replay from Secret Room:
        <span>
          {/* answer or waiting for a reply */}
        </span>
    </p>
    <Castle />
    </div>
  );
}
