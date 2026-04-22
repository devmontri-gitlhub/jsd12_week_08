import Chamber from "./03_Chamber";

export default function Tower({ question, handleAnswer, answer, vehicle, gamePhase, handleSecretRoomAction }) {
  return (
    // คงสี bg-orange-500 ไว้ แต่เพิ่ม rounded และขอบส้มเข้มเพื่อให้ดูหนาเป็นหอคอย
    <div className="flex flex-col justify-center items-center py-8 bg-orange-500 w-[90%] rounded-[2rem] border-4 border-orange-600 shadow-lg relative">
      
      {/* ตกแต่งด้านบนให้ดูเหมือนทางขึ้นหอคอยเล็กน้อย */}
      <div className="absolute top-0 w-1/2 h-1 bg-orange-300/40 rounded-full mt-2"></div>

      <h1 className="text-lg font-black uppercase tracking-tighter text-orange-950 mb-4 opacity-80">
        Tower Wing
      </h1>

      <div className="w-full flex justify-center">
        <Chamber
          question={question}
          handleAnswer={handleAnswer}
          answer={answer}
          vehicle={vehicle}
          gamePhase={gamePhase}
          handleSecretRoomAction={handleSecretRoomAction}
        />
      </div>
      
      {/* ตกแต่งด้านข้างให้ดูเหมือนมีโครงสร้างค้ำยัน */}
      <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-orange-600/30 rounded-r-full"></div>
      <div className="absolute right-0 top-1/4 w-1 h-1/2 bg-orange-600/30 rounded-l-full"></div>
    </div>
  );
}