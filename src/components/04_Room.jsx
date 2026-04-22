import Hall from "./05_Hall";

export default function Room({ question, handleAnswer, answer, vehicle, gamePhase, handleSecretRoomAction }) {
  return (
    // รักษา bg-green-500 ไว้ และเพิ่ม border-green-700 เพื่อสร้างความลึก
    <div className="flex flex-col justify-center items-center py-6 bg-green-500 w-[95%] rounded-[1.2rem] border-4 border-green-700 shadow-inner relative">
      
      {/* ตกแต่งมุมห้องด้วยแสงสะท้อนจางๆ ให้ดูมีมิติ */}
      <div className="absolute top-0 left-0 w-full h-full border border-white/10 rounded-[1rem] pointer-events-none"></div>

      <h1 className="text-xs font-black uppercase tracking-[0.2em] text-green-950 mb-3 opacity-90">
        Inner Room
      </h1>

      <div className="w-full flex justify-center px-2">
        <Hall 
          question={question} 
          handleAnswer={handleAnswer} 
          answer={answer} 
          vehicle={vehicle} 
          gamePhase={gamePhase} 
          handleSecretRoomAction={handleSecretRoomAction} 
        />
      </div>
      
      {/* เส้นตกแต่งด้านล่างให้ดูเหมือนขอบบัวพื้นห้อง */}
      <div className="absolute bottom-0 w-full h-1 bg-green-800/30"></div>
    </div>
  );
}