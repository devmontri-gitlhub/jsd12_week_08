import Room from "./04_Room";

export default function Chamber({ question, handleAnswer, answer, vehicle, gamePhase, handleSecretRoomAction }) {
  return (
    // รักษา bg-yellow-400 ไว้ แต่เพิ่ม border สีเหลืองเข้ม (yellow-600) ให้ดูเป็นกรอบห้อง
    <div className="flex flex-col justify-center items-center py-6 bg-yellow-400 w-[90%] rounded-[1.5rem] border-4 border-yellow-600 shadow-xl relative overflow-hidden">
      
      {/* เอฟเฟกต์แสงไฟสว่างบนเพดานห้อง (Top Light Effect) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-200/60"></div>
      
      <h1 className="text-sm font-black uppercase tracking-widest text-yellow-800 mb-4 drop-shadow-sm">
        Great Chamber
      </h1>

      <div className="w-full flex justify-center px-2">
        <Room 
          question={question} 
          handleAnswer={handleAnswer} 
          answer={answer} 
          vehicle={vehicle} 
          gamePhase={gamePhase} 
          handleSecretRoomAction={handleSecretRoomAction} 
        />
      </div>

      {/* ลายตกแต่งพื้นห้องเล็กน้อยเพื่อให้ดูเป็นโถงทางเดิน */}
      <div className="absolute bottom-1 w-1/3 h-1 bg-yellow-600/20 rounded-full"></div>
    </div>
  );
}