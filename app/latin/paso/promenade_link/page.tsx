import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Promenade and Counter Promenade", href: "promenade_and_counter_promenade" },
    { name: "Ecart", href: "ecart" },
    { name: "Spanish Lines and Flamenco Taps", href: "spanish_lines_and_flamenco_taps" },
    { name: "Travelling Spins from PP", href: "travelling_spins_from_pp" },
    { name: "Travelling Spins from CPP", href: "travelling_spins_from_cpp" },
    { name: "Fallaway Reverse Turn", href: "fallaway_reverse_turn" },
  ];

  const followingFigures = [
    { name: "Sur Place", href: "sur_place" },
    { name: "Chasse to Right and Left", href: "chasses_r_l" },
    { name: "Fallaway Reverse Turn", href: "fallaway_reverse_turn" },
    { name: "Ecart", href: "ecart" },
    { name: "Coup de Pique", href: "coup_de_pique" },
    { name: "Chasse Cape", href: "chasse_cape" },
    { name: "Promenade", href: "promenade" },
    { name: "Sixteen", href: "sixteen" },
    { name: "Promenade and Counter Promenade", href: "promenade_and_counter_promenade" },
    { name: "Twist Turn", href: "twist_turn" },
    { name: "Twists", href: "twists" },
    { name: "Travelling Spins from PP", href: "travelling_spins_from_pp" },
    { name: "Travelling Spins from CPP", href: "travelling_spins_from_cpp" },
    { name: "La Passe", href: "la_passe" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Promenade Link (also Promenade Close)</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="8AOFvOWpv28" start={232} end={251} />
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
// Promenade and Counter Promenade
// Ecart
// Spanish Lines and Flamenco Taps
// Travelling Spins from PP
// Travelling Spins from CPP
// Fallaway Reverse Turn

// Following Figures
// Sur Place
// Chasse to Right and Left
// Fallaway Reverse Turn
// Ecart
// Coup de Pique
// Chasse Cape
// Promenade
// Sixteen
// Promenade and Counter Promenade
// Twist Turn
// Twists
// Travelling Spins from PP
// Travelling Spins from CPP
// La Passe