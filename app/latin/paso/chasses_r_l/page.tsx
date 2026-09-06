import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Sur Place", href: "sur_place" },
    { name: "Promenade", href: "promenade" },
    { name: "Sixteen", href: "sixteen" },
    { name: "Chasse Cape", href: "chasse_cape" },
    { name: "Chasse to Right and Left", href: "chasses_r_l" },
  ];

  const followingFigures = [
    { name: "Appel", href: "appel" },
    { name: "Sur Place", href: "sur_place" },
    { name: "Chasse Cape", href: "chasse_cape" },
    { name: "Deplacement (Attack)", href: "deplacement" },
    { name: "Fallaway Reverse Turn", href: "fallaway_reverse_turn" },
    { name: "Coup de Pique", href: "coup_de_pique" },
    { name: "Separation", href: "separation" },
    { name: "Syncopated Separation", href: "syncopated_separation" },
    { name: "Huit", href: "huit" },
    { name: "Promenade Close", href: "promenade_link" },
    { name: "Grand Circle", href: "grand_circle" },
    { name: "Spanish Lines and Flamenco Taps", href: "spanish_lines_and_flamenco_taps" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Chasses to Right and Left</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="GXEdNudG0SA" start={143} end={175} />
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
// Promenade
// Sixteen
// Chasse Cape
// Chasse to Right and Left

// Following Figures
// Appel
// Sur Place
// Chasse Cape
// Deplacement (Attack)
// Fallaway Reverse Turn
// Coup de Pique
// Separation
// Syncopated Separation
// Huit
// Promenade Close
// Grand Circle
// Spanish Lines and Flamenco Taps
