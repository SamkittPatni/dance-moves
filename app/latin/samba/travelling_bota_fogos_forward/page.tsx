import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Maypole", href: "maypole" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Reverse Roll", href: "reverse_roll" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Shadow Circular Volta", href: "shadow_circular_volta" },
    { name: "Shadow Traveling Volta", href: "shadow_travelling_volta" },
  ];

  const followingFigures = [
    { name: "Shadow Circular Volta", href: "shadow_circular_volta" },
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Contra Bota Fogos", href: "contra_botafogos" },
    { name: "Roundabout", href: "roundabout" },
    { name: "Shadow Traveling Volta", href: "shadow_travelling_volta" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Traveling Bota Fogos Forward</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="p32273ZbdE0" start={0} end={-1} />
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
// Reverse Roll
// Reverse Turn
// Shadow Circular Volta
// Shadow Traveling Volta

// Following Figures
// Shadow Circular Volta
// Basic Movements
// Contra Bota Fogos
// Roundabout
// Shadow Traveling Volta