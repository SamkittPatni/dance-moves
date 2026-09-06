import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Walk", href: "walk" },
    { name: "Back Corte", href: "back_corte" },
    { name: "Basic Reverse Turn", href: "basic_reverse_turn" },
    { name: "Brush Tap", href: "brush_tap" },
    { name: "Closed Promenade", href: "closed_promenade" },
    { name: "Natural Twist Turn", href: "natural_twist_turn" },
    { name: "Open Finish", href: "open_and_closed_finish" },
    { name: "Open Promenade", href: "open_promenade" },
    { name: "Open Reverse Turn, Follower In Line", href: "open_reverse_turn_inside" },
    { name: "Open Reverse Turn, Follower Outside", href: "open_reverse_turn_outside" },
    { name: "Outside Swivel", href: "outside_swivel" },
    { name: "Progressive Side Step Reverse Turn", href: "progressive_side_step_reverse_turn" },
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Rock", href: "lf_rf_rocks" },
    { name: "Reverse Outside Swivel", href: "reverse_outside_swivel" },
    { name: "Rock Turn", href: "rock_turn" },
  ];

  const followingFigures = [
    { name: "Open Finish", href: "open_and_closed_finish" },
    { name: "Closed Finish", href: "open_and_closed_finish" },
    { name: "Rock", href: "lf_rf_rocks" },
    { name: "Back Corte", href: "back_corte" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">LF and RF Rocks</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="HvRItWroIkU" start={0} end={-1} />
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
// Walk
// Back Corte
// Basic Reverse Turn
// Brush Tap
// Closed Promenade
// Natural Twist Turn
// Open Finish
// Open Promenade
// Open Reverse Turn, Follower In Line
// Open Reverse Turn, Follower Outside
// Outside Swivel
// Progressive Side Step Reverse Turn
// Promenade Link
// Rock
// Reverse Outside Swivel
// Rock Turn

// Following Figures
// Open Finish
// Closed Finish
// Rock
// Back Corte