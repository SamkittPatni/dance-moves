import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Natural Top", href: "natural_top" },
    { name: "Opening Out To Right And Left", href: "opening_out_to_right_and_left" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Three Alemanaa", href: "three_alemanas" },
  ];

  const followingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Underarm Turn", href: "spot_turns" },
    { name: "Fan", href: "fan" },
    { name: "Reverse Top", href: "reverse_top" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Natural Opening Out Movement</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="qfsa2eapS_4" start={152} end={178} />
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
// Alemana
// Natural Top
// Opening Out To Right And Left
// Rope Spinning
// Three Alemanaa

// Following Figures
// Basic Movements
// Underarm Turn
// Fan
// Reverse Top