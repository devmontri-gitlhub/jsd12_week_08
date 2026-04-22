import SecretRoom from "./09_SecretRoom";

export default function Nook({ question, handleAnswer, answer, vehicle, gamePhase, handleSecretRoomAction }) {
  return (
    // คงสี bg-violet-500 ไว้ เพิ่มขอบ violet-800 ที่หนาและเงาที่ลึกขึ้น
    <div className="flex flex-col justify-center items-center py-6 bg-violet-500 w-[95%] rounded-xl border-[12px] border-violet-800 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
      
      {/* ตกแต่งด้วยเส้นรัศมีจางๆ เหมือนแสงที่ลอดมาจากห้องลับ */}
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>

      <h1 className="text-[10px] font-black uppercase tracking-[0.6em] text-violet-950 mb-4 z-10 drop-shadow-md">
        Deep Nook
      </h1>

      <div className="w-full flex justify-center px-1 z-10">
        <SecretRoom
          question={question}
          handleAnswer={handleAnswer}
          answer={answer}
          vehicle={vehicle}
          gamePhase={gamePhase}
          handleSecretRoomAction={handleSecretRoomAction}
        />
      </div>

      {/* เพิ่มขอบมืด (Vignette) ให้ดูเป็นซอกหลืบทางเข้า */}
      <div className="absolute inset-0 ring-[20px] ring-black/10 pointer-events-none rounded-xl"></div>
    </div>
  );
}