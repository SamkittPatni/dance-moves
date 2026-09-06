import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Promenade and Counter Promenade", href: "promenade_and_counter_promenade" },
    { name: "Ecart", href: "ecart" },
    { name: "Huit", href: "huit" },
    { name: "Open Telemark", href: "open_telemark" },
    { name: "Twists", href: "twists" },
    { name: "Chasse Cape", href: "chasse_cape" },
  ];

  const followingFigures = [
    { name: "Sur Place", href: "sur_place" },
    { name: "Chasse to Left", href: "chasses_r_l" },
    { name: "Promenade", href: "promenade" },
    { name: "Sixteen", href: "sixteen" },
    { name: "Promenade and Counter Promenade", href: "promenade_and_counter_promenade" },
    { name: "Twist Turn", href: "twist_turn" },
    { name: "Twists", href: "twists" },
    { name: "La Passe", href: "la_passe" },
    { name: "Ecart", href: "ecart" },
    { name: "Travelling Spins from PP", href: "travelling_spins_from_pp" },
    { name: "Travelling Spins from CPP", href: "travelling_spins_from_cpp" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Grand Circle</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="GQNttFFjIL0" start={325} end={356} />
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
// Promenade Link
// Promenade and Counter Promenade
// Ecart
// Huit
// Open Telemark
// Twists
// Chasse Cape

// Following Figures
// Sur Place
// Chasse to Left
// Promenade
// Sixteen
// Promenade and Counter Promenade
// Twist Turn
// Twists
// La Passe
// Ecart
// Travelling Spins from PP
// Travelling Spins from CPP