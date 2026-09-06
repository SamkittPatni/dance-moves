import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Argentine Crosses", href: "argentine_crosses" },
    { name: "Corta Jaca", href: "corta_jaca" },
    { name: "Criss Cross Voltas", href: "criss_cross_voltas" },
    { name: "Maypole", href: "maypole" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Promenade And Counter Promenade Runs", href: "promenade_and_counter_promenade_runs" },
    { name: "Reverse Roll", href: "reverse_roll" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Rolling Off The Arm", href: "rolling_off_the_arm" },
    { name: "Samba Walks", href: "samba_walks" },
    { name: "Solo Spot Volta", href: "solo_spot_volta" },
    { name: "Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Whisk", href: "whisks" },
    { name: "Foot Changes", href: "foot_changes" },
    { name: "Natural Roll", href: "natural_roll" },
  ];

  const followingFigures = [
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Whisk", href: "whisks" },
    { name: "Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Solo Spot Volta", href: "solo_spot_volta" },
    { name: "Corta Jaca", href: "corta_jaca" },
    { name: "Argentine Crosses", href: "argentine_crosses" },
    { name: "Natural Roll", href: "natural_roll" },
    { name: "Promenade And Counter Promenade Runs", href: "promenade_and_counter_promenade_runs" },
    { name: "Samba Walk", href: "samba_walks" },
    { name: "Bota Fogos To Promenade and Counter Promenade", href: "bota_fogos_to_promenade_and_counter_promenade" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Whisks</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="aJwbFO-q1-k" start={30} end={95} />
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
// Corta Jaca
// Criss Cross Voltas
// Maypole
// Basic Movement
// Promenade And Counter Promenade Runs
// Reverse Roll
// Reverse Turn
// Rolling Off The Arm
// Samba Walks
// Solo Spot Volta
// Traveling Volta
// Whisk
// Foot Changes
// Natural Roll

// Following Figures
// Basic Movement
// Whisk
// Traveling Volta
// Solo Spot Volta
// Corta Jaca
// Argentine Crosses
// Natural Roll
// Promenade And Counter Promenade Runs
// Samba Walk
// Bota Fogos To Promenade and Counter Promenade