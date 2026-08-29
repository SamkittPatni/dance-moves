import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Back Whisk", href: "back_whisk" },
    { name: "Contra Check", href: "contra_check" },
    { name: "Fallaway Whisk", href: "fallaway_whisk" },
    { name: "Open Impetus", href: "open_impetus" },
    { name: "Open Telemark", href: "open_telemark" },
    { name: "Outside Change", href: "outside_change" },
    { name: "Turning Lock", href: "turning_lock" },
    { name: "Turning Lock to R", href: "turning_lock_R" },
    { name: "Whisk", href: "whisk" },
  ];

  const followingFigures = [
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Wing", href: "wing" },
    { name: "Left Whisk", href: "left_whisk" },
    { name: "Chasse from Promenade", href: "chasse_pp" },
    { name: "Closed Wing", href: "closed_wing" },
    { name: "Cross Hesitation", href: "cross_hesitation" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Weave from Promenade Position</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="xThLZ2yvNKM" start={0} end={30} />
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
// Contra Check
// Fallaway Whisk
// Open Impetus
// Open Telemark
// Outside Change
// Turning Lock
// Turning Lock to R
// Whisk

// Following Figures
// Natural Spin Turn
// Natural Turn
// Wing
// Left Whisk
// Chasse from Promenade
// Closed Wing
// Cross Hesitation