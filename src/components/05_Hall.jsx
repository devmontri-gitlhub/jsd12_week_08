import Corridor from "./06_Corridor";

export default function Hall({ question, handleAnswer, answer, vehicle, gamePhase, handleSecretRoomAction }) {
  return (
    // คงสี bg-emerald-500 ไว้ และเพิ่ม border-emerald-700 หนาๆ ให้ดูเหมือนเสาค้ำยัน
    <div className="flex flex-col justify-center items-center py-6 bg-emerald-500 w-[95%] rounded-[1rem] border-[6px] border-emerald-700 shadow-2xl relative overflow-hidden">
      
      {/* ตกแต่งลวดลายทางเดินด้านข้างให้ดูเป็นโถงยาว */}
      <div className="absolute inset-y-0 left-2 w-[1px] bg-emerald-400/30"></div>
      <div className="absolute inset-y-0 right-2 w-[1px] bg-emerald-400/30"></div>

      <h1 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-950 mb-4 drop-shadow-sm">
        Main Hallway
      </h1>

      <div className="w-full flex justify-center px-1">
        <Corridor
          question={question}
          handleAnswer={handleAnswer}
          answer={answer}
          vehicle={vehicle}
          gamePhase={gamePhase}
          handleSecretRoomAction={handleSecretRoomAction}
        />
      </div>
      
      {/* เอฟเฟกต์เงามืดที่มุมห้องเพื่อให้ดูมีมิติความลึก */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
    </div>
  );
}