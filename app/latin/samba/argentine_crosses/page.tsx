import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Criss Cross Voltas", href: "criss_cross_voltas" },
    { name: "Natural Basic Movement", href: "basic_movements" },
    { name: "Reverse Basic Movement", href: "basic_movements" },
    { name: "Side Samba Walk", href: "samba_walks" },
    { name: "Stationary Samba Walk", href: "samba_walks" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Solo Spot Volta", href: "solo_spot_volta" },
    { name: "Whisk", href: "whisks" },
  ];

  const followingFigures = [
    { name: "Open Rocks", href: "open_rocks" },
    { name: "Closed Rocks", href: "closed_rocks" },
    { name: "Corta Jaca", href: "corta_jaca" },
    { name: "Stationary Samba Walk", href: "samba_walks" },
    { name: "Whisk", href: "whisks" },
    { name: "Solo Spot Volta", href: "solo_spot_volta" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Argentine Crosses</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="e2q6iT_8Pvo" start={0} end={-1} />
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
// Side Samba Walk
// Stationary Samba Walk
// Basic Movement
// Solo Spot Volta
// Whisk

// Following Figures
// Open Rocks
// Closed Rocks
// Corta Jaca
// Stationary Samba Walk
// Whisk
// Solo Spot Volta