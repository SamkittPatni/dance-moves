import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Maypole", href: "maypole" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Natural Roll", href: "natural_roll" },
    { name: "Open Rocks", href: "open_rocks" },
    { name: "Solo Spot Volta", href: "solo_spot_volta" },
    { name: "Whisk", href: "whisks" },
  ];

  const followingFigures = [
    { name: "Whisk", href: "whisks" },
    { name: "Samba Walks", href: "samba_walks" },
    { name: "Three Step Turn", href: "three_step_turn" },
    { name: "Rhythm Bounce", href: "rythm_bounce" },
    { name: "Traveling Volta to Left", href: "shadow_travelling_volta" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Promenade and Counter Promenade Runs</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="-rDPeZVWn9o" start={25} end={49} />
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
// Maypole
// Basic Movement
// Natural Roll
// Open Rocks
// Solo Spot Volta
// Whisk

// Following Figures
// Whisk
// Samba Walks
// Three Step Turn
// Rhythm Bounce
// Traveling Volta to Left