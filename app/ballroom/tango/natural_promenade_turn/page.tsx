import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic Reverse Turn", href: "basic_reverse_turn" },
    { name: "Chase", href: "the_chase" },
    { name: "Contra Check", href: "contra_check" },
    { name: "Fallaway Four Step", href: "fallaway_fourstep" },
    { name: "Fallaway Promenade", href: "fallaway_promenade" },
    { name: "Five Step", href: "five_step" },
    { name: "Four Step", href: "four_step" },
    { name: "Natural Promenade Turn", href: "natural_promenade_turn" },
    { name: "Natural Twist Turn", href: "natural_twist_turn" },
    { name: "Open Finish", href: "open_and_closed_finish" },
    { name: "Open Promenade", href: "open_promenade" },
    { name: "Open Reverse Turn, Lady In Line", href: "open_reverse_turn_inside" },
    { name: "Open Reverse Turn, Lady Outside", href: "open_reverse_turn_outside" },
    { name: "Oversway", href: "oversway" },
    { name: "Progressive Link", href: "progressive_link" },
    { name: "Progressive Side Step Reverse Turn", href: "progressive_side_step_reverse_turn" },
  ];

  const followingFigures = [
    { name: "Closed Promenade", href: "closed_promenade" },
    { name: "Open Promenade", href: "open_promenade" },
    { name: "Natural Promenade Turn", href: "natural_promenade_turn" },
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Back Open Promenade", href: "back_open_promenade" },
    { name: "Fallaway Promenade", href: "fallaway_promenade" },
    { name: "Rock Turn", href: "rock_turn" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Natural Promenade Turn</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="9Q3pEMobclM" start={44} end={71} />
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
// Basic Reverse Turn
// Chase
// Contra Check
// Fallaway Four Step
// Fallaway Promenade
// Five Step
// Four Step
// Natural Promenade Turn
// Natural Twist Turn
// Open Finish
// Open Promenade
// Open Reverse Turn, Lady In Line
// Open Reverse Turn, Lady Outside
// Oversway
// Progressive Link
// Progressive Side Step Reverse Turn

// Following Figures
// Closed Promenade
// Open Promenade
// Natural Promenade Turn
// Promenade Link
// Back Open Promenade
// Fallaway Promenade
// Rock Turn