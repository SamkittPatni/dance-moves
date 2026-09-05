import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Cross Chasse", href: "running_cross_chasse" },
    { name: "Cross Swivel", href: "cross_swivel" },
    { name: "Forward Lock", href: "forward_lock" },
    { name: "Four Quick Run", href: "four_quick_run" },
    { name: "Progressive Chasse", href: "progressive_chasse" },
    { name: "Running Finish", href: "running_finish" },
    { name: "Running Right Turn", href: "running_right_turn" },
    { name: "Six Quick Run", href: "six_quick_run" },
    { name: "Tipple Chasse To Right", href: "tipple_chasse" },
    { name: "V6", href: "v6" },
  ];

  const followingFigures = [
    { name: "Running Right Turn", href: "running_right_turn" },
    { name: "Natural Turn And Back Lock", href: "natural_turn_back_lock" },
    { name: "Natural Pivot Turn", href: "natural_pivot_turn" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Natural Turn With Hesitation", href: "natural_turn_hesitation" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Quarter Turn to Right", href: "quarter_turn_r" },
    { name: "Forward Lock", href: "forward_lock" },
    { name: "Four Quick Run", href: "four_quick_run" },
    { name: "V6", href: "v6" },
    { name: "Tipsy To L", href: "tipsy_r_l" },
    { name: "Six Quick Run", href: "six_quick_run" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Fish Tail</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="o9YtSG6CsG0" start={3} end={53} />
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
// Cross Chasse
// Cross Swivel
// Forward Lock
// Four Quick Run
// Progressive Chasse
// Running Finish
// Running Right Turn
// Six Quick Run
// Tipple Chasse To Right
// V6

// Following Figures
// Running Right Turn
// Natural Turn And Back Lock
// Natural Pivot Turn
// Natural Spin Turn
// Natural Turn With Hesitation
// Natural Turn
// Quarter Turn to Right
// Forward Lock
// Four Quick Run
// V6
// Tipsy To L
// Six Quick Run