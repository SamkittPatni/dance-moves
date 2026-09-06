import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Huit", href: "huit" },
    { name: "Promenade Close", href: "promenade_link" },
    { name: "Grand Circle", href: "grand_circle" },
    { name: "Spanish Lines and Flamenco Taps", href: "spanish_lines_and_flamenco_taps" },
  ];

  const followingFigures = [
    { name: "Huit", href: "huit" },
    { name: "Separation", href: "separation" },
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Promenade and Counter Promenade", href: "promenade_and_counter_promenade" },
    { name: "Grand Circle", href: "grand_circle" },
    { name: "Open Telemark", href: "open_telemark" },
    { name: "Travelling Spins from PP", href: "travelling_spins_from_pp" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Fallaway Ending to Separation</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="wMzGrxvKCIE" start={12} end={57} />
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
// Huit
// Promenade Close
// Grand Circle
// Spanish Lines and Flamenco Taps

// Following Figures
// Huit
// Separation
// Promenade Link
// Promenade and Counter Promenade
// Grand Circle
// Open Telemark
// Travelling Spins from PP