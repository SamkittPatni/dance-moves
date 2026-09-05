import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Fish Tail", href: "fishtail" },
    { name: "Four Quick Run", href: "four_quick_run" },
    { name: "Progressive Chasse", href: "progressive_chasse" },
    { name: "Running Right Turn", href: "running_right_turn" },
    { name: "V6", href: "v6" },
  ];

  const followingFigures = [
    { name: "Progressive Chasse", href: "progressive_chasse" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Heel Pivot", href: "heel_pivot" },
    { name: "Four Quick Run", href: "four_quick_run" },
    { name: "V6", href: "v6" },
    { name: "Six Quick Run", href: "six_quick_run" },
    { name: "Hover Corte", href: "hover_corte" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Quarter Turn to Right</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="HmhobImcwCI" start={14} end={39} />
          </Suspense>
        </div>
        <div className="flex md:flex-row flex-col py-5">
          <div className="w-full text-center md:mx-2 py-5 md:bg-black/75">
            <h2 className="font-bold text-2xl pb-2">Preceding Figures</h2>
            <hr className="mx-3 pb-2 border-gray-600" />
            <FigureList steps={precedingFigures} />
          </div>
          <div className="w-full text-center md:mx-2 py-5 md:bg-black/75">
            <h2 className="font-bold text-2xl pb-2">Following Figures</h2>
            <hr className="mx-3 pb-2 border-gray-600" />
            <FigureList steps={followingFigures} />
          </div>
        </div>
      </div>
    </>
  );
}

// Preceding Figures
// Closed Telemark
// Fish Tail
// Four Quick Run
// Progressive Chasse
// Running Right Turn
// V6

// Following Figures
// Progressive Chasse
// Reverse Pivot
// Heel Pivot
// Four Quick Run
// V6
// Six Quick Run
// Hover Corte