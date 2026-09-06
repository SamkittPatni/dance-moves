import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Argentine Crosses", href: "argentine_crosses" },
    { name: "Closed Rocks", href: "closed_rocks" },
    { name: "Maypole", href: "maypole" },
    { name: "Natural Roll", href: "natural_roll" },
    { name: "Basic Movement", href: "basic_movements" },
  ];

  const followingFigures = [
    { name: "Argentine Crosses", href: "argentine_crosses" },
    { name: "Closed Rocks", href: "closed_rocks" },
    { name: "Maypole", href: "maypole" },
    { name: "Natural Roll", href: "natural_roll" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Reverse Roll", href: "reverse_roll" },
    { name: "Three Step Turn", href: "three_step_turn" },
    { name: "Promenade And Counter Promenade Runs", href: "promenade_and_counter_promenade_runs" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Open Rocks</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="SNbOcqLTmZk" start={191} end={220} />
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
// Argentine Crosses
// Closed Rocks
// Maypole
// Natural Roll
// Basic Movement

// Following figures
// Argentine Crosses
// Closed Rocks
// Maypole
// Natural Roll
// Basic Movement
// Reverse Turn
// Reverse Roll
// Three Step Turn
// Natural Roll
// Promenade And Counter Promenade Runs