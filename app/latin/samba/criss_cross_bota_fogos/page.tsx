import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Criss Cross Voltas", href: "criss_cross_voltas" },
    { name: "Foot Changes", href: "foot_changes" },
    { name: "Basic Movementa", href: "basic_movements" },
    { name: "Samba Locks", href: "samba_locks" },
    { name: "Side Samba Walks", href: "samba_walks" },
    { name: "Side Basic Movement", href: "basic_movements" },
  ];

  const followingFigures = [
    { name: "Rolling Off The Arm", href: "rolling_off_the_arm" },
    { name: "Samba Walks", href: "samba_walks" },
    { name: "Stationary Samba Walk", href: "samba_walks" },
    { name: "Corta Jaca", href: "corta_jaca" },
    { name: "Natural Roll", href: "natural_roll" },
    { name: "Criss Cross Voltas", href: "criss_cross_voltas" },
    { name: "Maypole", href: "maypole" },
    { name: "Foot Changes", href: "foot_changes" },
    { name: "Samba Locks", href: "samba_locks" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Criss Cross Bota Fogos</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="Wqm4-gyDgGU" start={152} end={189} />
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
// Criss Cross Voltas
// Foot Changes
// Basic Movementa
// Samba Locks
// Side Samba Walks
// Side Basic Movement

// Following Figures
// Rolling Off The Arm
// Samba Walks
// Stationary Samba Walk
// Corta Jaca
// Natural Roll
// Criss Cross Voltas
// Maypole
// Foot Changes
// Samba Locks