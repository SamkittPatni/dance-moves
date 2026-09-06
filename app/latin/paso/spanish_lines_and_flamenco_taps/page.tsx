import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Chasse to Left", href: "chasses_r_l" },
    { name: "Promenade and Counter Promenade", href: "promenade_and_counter_promenade" },
    { name: "Ecart", href: "ecart" },
    { name: "Fallaway Reverse Turn", href: "fallaway_reverse_turn" },
    { name: "Travelling Spins from PP", href: "travelling_spins_from_pp" },
    { name: "Travelling Spins from CPP", href: "travelling_spins_from_cpp" },
  ];

  const followingFigures = [
    { name: "Promenade Close", href: "promenade_link" },
    { name: "Spanish Line", href: "spanish_lines_and_flamenco_taps" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Spanish Lines and Flamenco Taps</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="T5LEJq_4Z2A" start={0} end={15} />
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
// Chasse to Left
// Promenade and Counter Promenade
// Ecart
// Fallaway Reverse Turn
// Travelling Spins from PP
// Travelling Spins from CPP

// Following Figures
// Promenade Close
// Spanish Line