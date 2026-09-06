import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Argentine Crosses", href: "argentine_crosses" },
    { name: "Foot Changes", href: "foot_changes" },
    { name: "Maypole", href: "maypole" },
    { name: "Natural Basic Movement", href: "basic_movements" },
    { name: "Natural Roll", href: "natural_roll" },
    { name: "Reverse Basic Movement", href: "basic_movements" },
    { name: "Stationary Samba Walk", href: "samba_walks" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Solo Spot Volta", href: "solo_spot_volta" },
    { name: "Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Whisk", href: "whisks" },
  ];

  const followingFigures = [
    { name: "Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Natural Basic Movement", href: "basic_movements" },
    { name: "Reverse Basic Movement", href: "basic_movements" },
    { name: "Whisk", href: "whisks" },
    { name: "Samba Walk", href: "samba_walks" },
    { name: "Bota Fogos To Promenade and Counter Promenade", href: "bota_fogos_to_promenade_and_counter_promenade" },
    { name: "Solo Spot Volta", href: "solo_spot_volta" },
    { name: "Argentine Crosses", href: "argentine_crosses" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Back Rocks</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="wszVFF3pL6I" start={155} end={182} />
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
// Foot Changes
// Maypole
// Natural Basic Movement
// Natural Roll
// Reverse Basic Movement
// Stationary Samba Walk
// Basic Movement
// Solo Spot Volta
// Traveling Volta
// Whisk

// Following Figures
// Traveling Volta
// Natural Basic Movement
// Reverse Basic Movement
// Whisk
// Samba Walk
// Bota Fogos To Promenade and Counter Promenade
// Solo Spot Volta
// Argentine Crosses