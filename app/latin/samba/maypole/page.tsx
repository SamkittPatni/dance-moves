import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Criss Cross Bota Fogos", href: "criss_cross_bota_fogos" },
    { name: "Criss Cross Voltas", href: "criss_cross_voltas" },
    { name: "Maypole", href: "maypole" },
    { name: "Samba Locks", href: "samba_locks" },
    { name: "Samba Walks", href: "samba_walks" },
    { name: "Basic Movement", href: "basic_movements" },
  ];

  const followingFigures = [
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Cruzados Walks and Locks", href: "cruzados_walks_and_locks" },
    { name: "Samba Locks", href: "samba_locks" },
    { name: "Promenade And Counter Promenade Runs", href: "promenade_and_counter_promenade_runs" },
    { name: "Natural Roll", href: "natural_roll" },
    { name: "Roundabout", href: "roundabout" },
    { name: "Contra Bota Fogos", href: "contra_botafogos" },
    { name: "Shadow Circular Volta", href: "shadow_circular_volta" },
    { name: "Maypole", href: "maypole" },
    { name: "Plait", href: "plait" },
    { name: "Back Rocks", href: "back_rocks" },
    { name: "Open Rocks", href: "open_rocks" },
    { name: "Closed Rocks", href: "closed_rocks" },
    { name: "Corta Jaca", href: "corta_jaca" },
    { name: "Shadow Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Solo Spot Volta", href: "solo_spot_volta" },
    { name: "Criss Cross Voltas", href: "criss_cross_voltas" },
    { name: "Traveling Bota Fogos Back", href: "travelling_bota_fogos_backward" },
    { name: "Traveling Bota Fogos Forward", href: "travelling_bota_fogos_forward" },
    { name: "Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Rhythm Bounce", href: "rythm_bounce" },
    { name: "Samba Walks", href: "samba_walks" },
    { name: "Whisk", href: "whisks" },
    { name: "Basic Movement", href: "basic_movements" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Maypole</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="by8LJa3HyR8" start={406} end={445} />
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
// Criss Cross Bota Fogos
// Criss Cross Voltas
// Maypole
// Samba Locks
// Samba Walks
// Basic Movement

// Following Figures
// Reverse Turn
// Cruzados Walks and Locks
// Samba Locks
// Promenade And Counter Promenade Runs
// Natural Roll
// Roundabout
// Contra Bota Fogos
// Shadow Circular Volta
// Maypole
// Plait
// Back Rocks
// Open Rocks
// Closed Rocks
// Corta Jaca
// Shadow Traveling Volta
// Solo Spot Volta
// Criss Cross Voltas
// Traveling Bota Fogos Back
// Traveling Bota Fogos Forward
// Traveling Volta
// Rhythm Bounce
// Samba Walks
// Whisk
// Basic Movement