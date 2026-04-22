import Tower from "./02_Tower";

export default function Castle(banana) {
  console.log(banana);
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-red-500 w-full rounded-[3rem] border-8 border-red-700 shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)] relative overflow-hidden">
      
      {/* ตกแต่งขอบกำแพงด้านบนให้ดูเหมือนป้อม (Crenelations) แบบง่ายด้วยเงา */}
      <div className="absolute top-0 left-0 w-full h-4 bg-red-700/30"></div>

      <h1 className="text-xl font-black uppercase tracking-widest text-red-100 drop-shadow-md mb-6">
        Castle Wall
      </h1>

      <div className="w-full">
        <Tower
          question={banana.question}
          handleAnswer={banana.handleAnswer}
          answer={banana.answer}
          vehicle={banana.vehicle}
          gamePhase={banana.gamePhase}
          handleSecretRoomAction={banana.handleSecretRoomAction}
        />
      </div>

      {/* ตกแต่งฐานกำแพง */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-black/20"></div>
    </div>
  );
}