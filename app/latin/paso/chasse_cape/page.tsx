import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Chasse to Right", href: "chasses_r_l" },
    { name: "Promenade", href: "promenade" },
    { name: "Promenade Close", href: "promenade_link" },
    { name: "Sixteen", href: "sixteen" },
    { name: "La Passe", href: "la_passe" },
    { name: "Coup de Pique", href: "coup_de_pique" },
  ];

  const followingFigures = [
    { name: "Chasse to Right", href: "chasses_r_l" },
    { name: "Coup de Pique", href: "coup_de_pique" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Chasse Cape</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="6AZZtCGQDs8" start={600} end={867} />
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
// Chasse to Right
// Promenade
// Promenade Close
// Sixteen
// La Passe
// Coup de Pique

// Following Figures
// Chasse to Right
// Coup de Pique