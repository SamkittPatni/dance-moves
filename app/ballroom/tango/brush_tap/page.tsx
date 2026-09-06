import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Back Corte", href: "back_corte" },
    { name: "Back Open Promenade", href: "back_open_promenade" },
    { name: "Basic Reverse Turn", href: "basic_reverse_turn" },
    { name: "Closed Promenade", href: "closed_promenade" },
    { name: "Fallaway Reverse and Slip Pivot", href: "fallaway_reverse_and_slip_pivot" },
    { name: "Open Finish", href: "open_and_closed_finish" },
    { name: "Open Promenade", href: "open_promenade" },
    { name: "Open Reverse Turn, Follower In Line", href: "open_reverse_turn_inside" },
    { name: "Open Reverse Turn, Follower Outside", href: "open_reverse_turn_outside" },
    { name: "Outside Swivel", href: "outside_swivel" },
    { name: "Progressive Side Step Reverse Turn", href: "progressive_side_step_reverse_turn" },
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Reverse Outside Swivel", href: "reverse_outside_swivel" },
    { name: "Rock Turn", href: "rock_turn" },
  ];

  const followingFigures = [
    { name: "Walk", href: "walk" },
    { name: "Progressive Link", href: "progressive_link" },
    { name: "Progressive Side Step", href: "progressive_side_step" },
    { name: "Back Corte", href: "back_corte" },
    { name: "LF Rock", href: "lf_rf_rocks" },
    { name: "Four Step", href: "four_step" },
    { name: "Four Step Change", href: "four_step_change" },
    { name: "Open Reverse Turn, Follower Outside", href: "open_reverse_turn_outside" },
    { name: "Open Reverse Turn, Follower In Line", href: "open_reverse_turn_inside" },
    { name: "Progressive Side Step Reverse Turn", href: "progressive_side_step_reverse_turn" },
    { name: "Basic Reverse Turn", href: "basic_reverse_turn" },
    { name: "Fallaway Reverse and Slip Pivot", href: "fallaway_reverse_and_slip_pivot" },
    { name: "Fallaway Four Step", href: "fallaway_fourstep" },
    { name: "Oversway", href: "oversway" },
    { name: "Contra Check", href: "contra_check" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Brush Tap</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="Bf7-xEs27YM" start={0} end={-1} />
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
// Back Corte
// Back Open Promenade
// Basic Reverse Turn
// Closed Promenade
// Fallaway Reverse and Slip Pivot
// Open Finish
// Open Promenade
// Open Reverse Turn, Follower In Line
// Open Reverse Turn, Follower Outside
// Outside Swivel
// Progressive Side Step Reverse Turn
// Promenade Link
// Reverse Outside Swivel
// Rock Turn

// Following Figures
// Walk
// Progressive Link
// Progressive Side Step
// Back Corte
// LF Rock
// Four Step
// Four Step Change
// Open Reverse Turn, Follower Outside
// Open Reverse Turn, Follower In Line
// Progressive Side Step Reverse Turn
// Basic Reverse Turn
// Fallaway Reverse and Slip Pivot
// Fallaway Four Step
// Oversway
// Contra Check