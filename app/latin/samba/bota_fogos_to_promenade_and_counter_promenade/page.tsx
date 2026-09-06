import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Criss Cross Voltas", href: "criss_cross_voltas" },
    { name: "Natural Basic Movement", href: "basic_movements" },
    { name: "Reverse Basic Movement", href: "basic_movements" },
    { name: "Reverse Roll", href: "reverse_roll" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Samba Walk", href: "samba_walks" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Traveling Bota Fogos Back", href: "travelling_bota_fogos_backward" },
    { name: "Whisk", href: "whisks" },
  ];

  const followingFigures = [
    { name: "Samba Walks", href: "samba_walks" },
    { name: "Traveling Volta", href: "shadow_travelling_volta" },
    { name: "Foot Change", href: "foot_changes" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Bota Fogos to Promenade and Counter Promenade</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="glqDbEHXvN8" start={300} end={371} />
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
// Natural Basic Movement
// Reverse Basic Movement
// Reverse Roll
// Reverse Turn
// Samba Walk
// Basic Movement
// Traveling Bota Fogos Back
// Whisk

// Following Figures
// Samba Walks
// Traveling Volta
// Foot Change