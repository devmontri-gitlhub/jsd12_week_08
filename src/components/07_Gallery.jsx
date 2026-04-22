import Nook from "./08_Nook";

export default function Gallery({ question, handleAnswer, answer, vehicle, gamePhase, handleSecretRoomAction }) {
  return (
    // คงสี bg-indigo-500 ไว้ เพิ่มขอบ indigo-700 หนาๆ และใส่เงาฟุ้งแบบมิติห้องจัดแสดง
    <div className="flex flex-col justify-center items-center py-6 bg-indigo-500 w-[95%] rounded-2xl border-[10px] border-indigo-700 shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative overflow-hidden">
      
      {/* ตกแต่งมุมเพดานห้องจัดแสดงด้วยไฮไลท์จางๆ */}
      <div className="absolute top-0 inset-x-0 h-1 bg-indigo-400/30"></div>

      <h1 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-950 mb-4 opacity-80 z-10">
        Grand Gallery
      </h1>

      <div className="w-full flex justify-center px-1">
        <Nook 
          question={question} 
          handleAnswer={handleAnswer} 
          answer={answer} 
          vehicle={vehicle} 
          gamePhase={gamePhase} 
          handleSecretRoomAction={handleSecretRoomAction} 
        />
      </div>

      {/* เอฟเฟกต์ Vignette ที่ขอบห้องเพื่อให้ดูเหมือนมีแสงส่องมาที่กลางห้อง (Nook) */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/10 pointer-events-none"></div>
    </div>
  );
}