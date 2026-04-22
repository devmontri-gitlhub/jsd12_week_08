import Gallery from "./07_Gallery";

export default function Corridor({ question, handleAnswer, answer, vehicle, gamePhase, handleSecretRoomAction }) {
  return (
    // คงสี bg-blue-500 ไว้ เพิ่มขอบสี blue-700 และบีบด้านข้างให้ดูเป็นทางเดิน (Corridor)
    <div className="flex flex-col justify-center items-center py-6 bg-blue-500 w-[95%] rounded-[0.8rem] border-x-[8px] border-y-4 border-blue-700 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] relative overflow-hidden">
      
      {/* ตกแต่งผนังทางเดินด้วยเส้นนำสายตา (Perspective Lines) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/40"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-900/40"></div>

      <h1 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-950 mb-4 drop-shadow-sm z-10">
        Access Corridor
      </h1>

      <div className="w-full flex justify-center px-1">
        <Gallery
          question={question}
          handleAnswer={handleAnswer}
          answer={answer}
          vehicle={vehicle}
          gamePhase={gamePhase}
          handleSecretRoomAction={handleSecretRoomAction}
        />
      </div>

      {/* เอฟเฟกต์เงามืดด้านข้างให้ดูแคบและลึก */}
      <div className="absolute inset-y-0 left-0 w-2 bg-black/10"></div>
      <div className="absolute inset-y-0 right-0 w-2 bg-black/10"></div>
    </div>
  );
}