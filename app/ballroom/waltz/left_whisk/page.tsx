import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Back Whisk", href: "back_whisk" },
    { name: "Basic Weave", href: "basic_weave" },
    { name: "Closed Impetus", href: "closed_impetus" },
    { name: "Contra Check", href: "contra_check" },
    { name: "Fallaway Whisk", href: "fallaway_whisk" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Open Impetus", href: "open_impetus" },
    { name: "Open Telemark", href: "open_telemark" },
    { name: "Outside Change", href: "outside_change" },
    { name: "Outside Spin", href: "outside_spin" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Turning Lock", href: "turning_lock" },
    { name: "Turning Lock to R", href: "turning_lock_R" },
    { name: "Weave from Promenade", href: "weave_pp" },
    { name: "Whisk", href: "whisk" },
  ];

  const followingFigures = [
    { name: "Outside Change", href: "outside_change" },
    { name: "Fallaway Whisk", href: "fallaway_whisk" },
    { name: "Back Whisk", href: "back_whisk" },
    { name: "Outside Spin", href: "outside_spin" },
    { name: "Open Impetus", href: "open_impetus" },
    { name: "Closed Impetus", href: "closed_impetus" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Left Whisk</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="XkZpYsxhros" start={27} end={45} />
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
// Back Whisk
// Basic Weave
// Closed Impetus
// Contra Check
// Fallaway Whisk
// Natural Spin Turn
// Open Impetus
// Open Telemark
// Outside Change
// Outside Spin
// Reverse Turn
// Turning Lock
// Turning Lock to R
// Weave from Promenade
// Whisk

// Following Figures
// Outside Change
// Fallaway Whisk
// Back Whisk
// Outside Spin
// Open Impetus
// Closed Impetus

