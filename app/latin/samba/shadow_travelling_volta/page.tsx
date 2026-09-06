import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Cruzados Walks and Locks", href: "cruzados_walks_and_locks" },
    { name: "Foot Changes", href: "foot_changes" },
    { name: "Maypole", href: "maypole" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Samba Walk", href: "samba_walks" },
    { name: "Shadow Circular Volta", href: "shadow_circular_volta" },
    { name: "Shadow Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Traveling Bota Fogos Forward", href: "travelling_bota_fogos_forward" },
  ];

  const followingFigures = [
    { name: "Samba Walk", href: "samba_walks" },
    { name: "Traveling Bota Fogos Forward", href: "travelling_bota_fogos_forward" },
    { name: "Shadow Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Shadow Circular Volta", href: "shadow_circular_volta" },
    { name: "Contra Bota Fogos", href: "contra_botafogos" },
    { name: "Cruzados Walks and Locks", href: "cruzados_walks_and_locks" },
    { name: "Foot Changes", href: "foot_changes" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Shadow Traveling Volta</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="56DecsN5B4" start={0} end={-1} />
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
// Cruzados Walks and Locks
// Foot Changes
// Maypole
// Basic Movement
// Samba Walk
// Shadow Circular Volta
// Shadow Traveling Volta
// Traveling Bota Fogos Forward

// Following Figures
// Samba Walk
// Traveling Bota Fogos Forward
// Shadow Traveling Volta
// Shadow Circular Volta
// Contra Bota Fogos
// Cruzados Walks and Locks
// Foot Changes