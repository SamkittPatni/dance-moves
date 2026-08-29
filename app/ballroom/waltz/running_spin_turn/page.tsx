import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic Weave", href: "basic_weave" },
    { name: "Chasse from Promenade", href: "chasse_pp" },
    { name: "Closed Change LF", href: "closed_changes" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Outside Change", href: "outside_change" },
    { name: "Outside Spin", href: "outside_spin" },
    { name: "Turning Lock", href: "turning_lock" },
    { name: "Weave from Promenade", href: "weave_pp" },
  ];

  const followingFigures = [
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Hesitation Change", href: "hesitation_change" },
    { name: "Closed Impetus", href: "closed_impetus" },
    { name: "Back Lock", href: "back_lock" },
    { name: "Fallaway Whisk", href: "fallaway_whisk" },
    { name: "Back Whisk", href: "back_whisk" },
    { name: "Open Impetus", href: "open_impetus" },
    { name: "Outside Spin", href: "outside_spin" },
    { name: "Outside Change", href: "outside_change" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Running Spin Turn</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="6H-3paXoPXY" start={55} end={92} />
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
// Basic Weave
// Chasse from Promenade
// Closed Change LF
// Closed Telemark
// Natural Turn
// Outside Change
// Outside Spin
// Turning Lock
// Weave from Promenade

// Following Figures
// Natural Turn
// Hesitation Change
// Closed Impetus
// Back Lock
// Fallaway Whisk
// Back Whisk
// Open Impetus
// Outside Spin
// Outside Change