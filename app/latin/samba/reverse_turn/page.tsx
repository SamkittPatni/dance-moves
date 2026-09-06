import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Back Rocks", href: "back_rocks" },
    { name: "Closed Rocks", href: "closed_rocks" },
    { name: "Maypole", href: "maypole" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Open Rocks", href: "open_rocks" },
    { name: "Plait", href: "plait" },
    { name: "Reverse Roll", href: "reverse_roll" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Rolling Off The Arm", href: "rolling_off_the_arm" },
  ];

  const followingFigures = [
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Whisk", href: "whisks" },
    { name: "Traveling Bota Fogos Forward", href: "travelling_bota_fogos_forward" },
    { name: "Bota Fogos To Promenade and Counter Promenade", href: "bota_fogos_to_promenade_and_counter_promenade" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Reverse Roll", href: "reverse_roll" },
    { name: "Traveling Bota Fogos Back", href: "travelling_bota_fogos_backward" },
    { name: "Back Rocks", href: "back_rocks" },
    { name: "Plait", href: "plait" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Reverse Turn</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="W2vQjliAoa8" start={193} end={218} />
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
// Back Rocks
// Closed Rocks
// Maypole
// Basic Movement
// Open Rocks
// Plait
// Reverse Roll
// Reverse Turn
// Rolling Off The Arm

// Following Figures
// Basic Movement
// Whisk
// Traveling Bota Fogos Forward
// Bota Fogos To Promenade and Counter Promenade
// Reverse Turn
// Reverse Roll
// Traveling Bota Fogos Back
// Back Rocks
// Plait