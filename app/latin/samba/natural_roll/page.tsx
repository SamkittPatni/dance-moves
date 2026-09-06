import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Back Rocks", href: "back_rocks" },
    { name: "Closed Rocks", href: "closed_rocks" },
    { name: "Corta Jaca", href: "corta_jaca" },
    { name: "Criss Cross Bota Fogos", href: "criss_cross_bota_fogos" },
    { name: "Maypole", href: "maypole" },
    { name: "Open Rocks", href: "open_rocks" },
    { name: "Plait", href: "plait" },
    { name: "Stationary Samba Walk", href: "samba_walks" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Whisk", href: "whisks" },
  ];

  const followingFigures = [
    { name: "Promenade And Counter Promenade Runs", href: "promenade_and_counter_promenade_runs" },
    { name: "Corta Jaca", href: "corta_jaca" },
    { name: "Back Rocks", href: "back_rocks" },
    { name: "Plait", href: "plait" },
    { name: "Open Rocks", href: "open_rocks" },
    { name: "Closed Rocks", href: "closed_rocks" },
    { name: "Whisk", href: "whisks" },
    { name: "Basic Movement", href: "basic_movements" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Natural Roll</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="eL3ZuR25yVo" start={0} end={-1} />
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
// Corta Jaca
// Criss Cross Bota Fogos
// Maypole
// Open Rocks
// Plait
// Stationary Samba Walk
// Basic Movement
// Whisk

// Following Figures
// Promenade And Counter Promenade Runs
// Corta Jaca
// Back Rocks
// Plait
// Open Rocks
// Closed Rocks
// Whisk
// Basic Movement