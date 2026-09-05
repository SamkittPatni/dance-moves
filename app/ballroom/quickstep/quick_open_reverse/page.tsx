import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Forward Lock", href: "forward_lock" },
    { name: "Heel Pivot", href: "heel_pivot" },
    { name: "Progressive Chasse", href: "progressive_chasse" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Running Finish", href: "running_finish" },
    { name: "Running Right Turn", href: "running_right_turn" },
    { name: "Tipple Chasse To Right", href: "tipple_chasse" },
    { name: "V6", href: "v6" },
    { name: "Zig-Zag, Back Lock And Running Finish", href: "zig_zag_back_lock_running_finish" },
  ];

  const followingFigures = [
    { name: "Progressive Chasse", href: "progressive_chasse" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Four Quick Run", href: "four_quick_run" },
    { name: "Heel Pivot", href: "heel_pivot" },
    { name: "Hover Corte", href: "hover_corte" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Quick Open Reverse</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="mn-aw3K0ncE" start={0} end={-1} />
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
// Double Reverse Spin
// Forward Lock
// Heel Pivot
// Progressive Chasse
// Reverse Pivot
// Running Finish
// Running Right Turn
// Tipple Chasse To Right
// V6
// Zig-Zag, Back Lock And Running Finish

// Following Figures
// Progressive Chasse
// Reverse Pivot
// Four Quick Run
// Heel Pivot
// Hover Corte