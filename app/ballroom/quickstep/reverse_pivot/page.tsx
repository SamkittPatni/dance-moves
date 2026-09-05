import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Chasse Reverse Turn", href: "chasse_reverse_turn" },
    { name: "Closed Impetus", href: "closed_impetus" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Quarter Turn to Right", href: "quarter_turn_r" },
    { name: "Quick Open Reverse", href: "quick_open_reverse" },
  ];

  const followingFigures = [
    { name: "Chasse Reverse Turn", href: "chasse_reverse_turn" },
    { name: "Progressive Chasse To Right", href: "progressive_chasse_r" },
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Cross Chasse", href: "running_cross_chasse" },
    { name: "Zig-Zag, Back Lock And Running Finish", href: "zig_zag_back_lock_running_finish" },
    { name: "Quick Open Reverse", href: "quick_open_reverse" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Cross Swivel", href: "cross_swivel" },
    { name: "Tipsy To R", href: "tipsy_r_l" },
    { name: "Change of Direction", href: "change_of_direction" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Reverse Pivot</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="8dl5QfIdE9U" start={0} end={-1} />
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
// Chasse Reverse Turn
// Closed Impetus
// Natural Spin Turn
// Quarter Turn to Right
// Quick Open Reverse

// Following Figures
// Chasse Reverse Turn
// Progressive Chasse To Right
// Double Reverse Spin
// Cross Chasse
// Zig-Zag, Back Lock And Running Finish
// Quick Open Reverse
// Closed Telemark
// Cross Swivel
// Tipsy To R
// Change of Direction