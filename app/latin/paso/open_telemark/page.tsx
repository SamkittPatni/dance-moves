import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Promenade", href: "promenade" },
    { name: "Promenade and Counter Promenade", href: "promenade_and_counter_promenade" },
    { name: "Huit", href: "huit" },
    { name: "Fallaway Ending to Separation", href: "fallaway_ending_to_separation" },
    { name: "Grand Circle", href: "grand_circle" },
    { name: "La Passe", href: "la_passe" },
    { name: "Twist Turn", href: "twist_turn" },
  ];

  const followingFigures = [
    { name: "Promenade", href: "promenade" },
    { name: "Promenade and Counter Promenade", href: "promenade_and_counter_promenade" },
    { name: "Huit", href: "huit" },
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Grand Circle", href: "grand_circle" },
    { name: "La Passe", href: "la_passe" },
    { name: "Twist Turn", href: "twist_turn" },
    { name: "Travelling Spins from PP", href: "travelling_spins_from_pp" },
    { name: "Spanish Lines and Flamenco Taps", href: "spanish_lines_and_flamenco_taps" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Open Telemark</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="F3Bm7k0AGK4" start={191} end={230} />
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
// Promenade
// Promenade and Counter Promenade
// Huit
// Fallaway Ending to Separation
// Grand Circle
// La Passe
// Twist Turn

// Following Figures
// Promenade
// Promenade and Counter Promenade
// Huit
// Promenade Link
// Grand Circle
// La Passe
// Twist Turn
// Travelling Spins from PP
// Spanish Lines and Flamenco Taps