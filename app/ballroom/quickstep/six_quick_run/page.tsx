import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Closed Impetus", href: "closed_impetus" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Fish Tail", href: "fishtail" },
    { name: "Forward Lock", href: "forward_lock" },
    { name: "Four Quick Run", href: "four_quick_run" },
    { name: "Hover Corte", href: "hover_corte" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Progressive Chasse", href: "progressive_chasse" },
    { name: "Progressive Chasse To Right", href: "progressive_chasse_r" },
    { name: "Quarter Turn to Right", href: "quarter_turn_r" },
    { name: "Running Finish", href: "running_finish" },
    { name: "Tipple Chasse To Right", href: "tipple_chasse" },
    { name: "V6", href: "v6" },
  ];

  const followingFigures = [
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Fish Tail", href: "fishtail" },
    { name: "Tipsy To L", href: "tipsy_r_l" },
    { name: "Four Quick Run", href: "four_quick_run" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Six Quick Run</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="07YnscLEyt8" start={0} end={-1} />
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
// Closed Impetus
// Closed Telemark
// Fish Tail
// Forward Lock
// Four Quick Run
// Hover Corte
// Natural Spin Turn
// Progressive Chasse
// Progressive Chasse To Right
// Quarter Turn to Right
// Running Finish
// Tipple Chasse To Right
// V6

// Following Figures
// Natural Turn
// Fish Tail
// Tipsy To L
// Four Quick Run