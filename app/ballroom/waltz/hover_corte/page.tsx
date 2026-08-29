import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Closed Impetus", href: "closed_impetus" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Outside Spin", href: "outside_spin" },
    { name: "Reverse Turn", href: "reverse_turn" },
  ];

  const followingFigures = [
    { name: "Back Lock", href: "back_lock" },
    { name: "Outside Change", href: "outside_change" },
    { name: "Fallaway Whisk", href: "fallaway_whisk" },
    { name: "Back Whisk", href: "back_whisk" },
    { name: "Outside Spin", href: "outside_spin" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Hover Corte</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="0aO25OvEEIg" start={8} end={49} />
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
// Closed Impetus
// Natural Spin Turn
// Outside Spin
// Reverse Turn

// Following Figures
// Back Lock
// Outside Change
// Fallaway Whisk
// Back Whisk
// Outside Spin

