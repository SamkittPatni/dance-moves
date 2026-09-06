import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Sur Place", href: "sur_place" },
    { name: "Chasse to Left", href: "chasses_r_l" },
    { name: "Huit", href: "huit" },
    { name: "Promenade Close", href: "promenade_link" },
  ];

  const followingFigures = [
    { name: "Sur Place", href: "sur_place" },
    { name: "Chasse to Right", href: "chasses_r_l" },
    { name: "Attack", href: "deplacement" },
    { name: "Fallaway Reverse Turn", href: "fallaway_reverse_turn" },
    { name: "Coup de Pique", href: "coup_de_pique" },
    { name: "Chasse Cape", href: "chasse_cape" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Promenade</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="jniZvj1cV1Q" start={467} end={494} />
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
// Sur Place
// Chasse to Left
// Huit
// Promenade Close

// Following Figures
// Sur Place
// Chasse to Right
// Attack
// Fallaway Reverse Turn
// Coup de Pique
// Chasse Cape