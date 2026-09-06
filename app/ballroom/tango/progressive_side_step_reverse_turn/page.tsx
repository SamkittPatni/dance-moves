import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Back Corte", href: "back_corte" },
    { name: "Brush Tap", href: "brush_tap" },
    { name: "Closed Promenade", href: "closed_promenade" },
    { name: "Fallaway Reverse and Slip Pivot", href: "fallaway_reverse_and_slip_pivot" },
    { name: "Four Step Change", href: "four_step_change" },
    { name: "Open Finish", href: "open_and_closed_finish" },
    { name: "Open Promenade", href: "open_promenade" },
    { name: "Outside Swivel", href: "outside_swivel" },
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Reverse Outside Swivel", href: "reverse_outside_swivel" },
    { name: "Rock Turn", href: "rock_turn" },
    { name: "Walk", href: "walk" },
  ];

  const followingFigures = [
    { name: "Walk", href: "walk" },
    { name: "Progressive Side Step", href: "progressive_side_step" },
    { name: "Progressive Link", href: "progressive_link" },
    { name: "Back Corte", href: "back_corte" },
    { name: "Rock", href: "lf_rf_rocks" },
    { name: "Closed Promenade", href: "closed_promenade" },
    { name: "Open Promenade", href: "open_promenade" },
    { name: "Natural Promenade Turn", href: "natural_promenade_turn" },
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Back Open Promenade", href: "back_open_promenade" },
    { name: "Fallaway Promenade", href: "fallaway_promenade" },
    { name: "Four Step", href: "four_step" },
    { name: "Outside Swivel", href: "outside_swivel" },
    { name: "Four Step Change", href: "four_step_change" },
    { name: "Brush Tap", href: "brush_tap" },
    { name: "Fallaway Four Step", href: "fallaway_fourstep" },
    { name: "Five Step", href: "five_step" },
    { name: "Contra Check", href: "contra_check" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Progressive Side Step Reverse Turn</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="NzFHUHK0b08" start={359} end={403} />
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
// Brush Tap
// Closed Promenade
// Fallaway Reverse and Slip Pivot
// Four Step Change
// Open Finish
// Open Promenade
// Outside Swivel
// Promenade Link
// Reverse Outside Swivel
// Rock Turn
// Walk

// Following Figures
// Walk
// Progressive Side Step
// Progressive Link
// Back Corte
// Rock
// Closed Promenade
// Open Promenade
// Natural Promenade Turn
// Promenade Link
// Back Open Promenade
// Fallaway Promenade
// Four Step
// Outside Swivel
// Four Step Change
// Brush Tap
// Fallaway Four Step
// Five Step
// Contra Check