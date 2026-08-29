import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Fallaway Reverse And Slip Pivot", href: "fallaway_reverse_slip_pivot" },
    { name: "Hesitation Change", href: "hesitation_change" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Reverse Turn", href: "reverse_turn" },
  ];

  const followingFigures = [
    { name: "Chasse from Promenade", href: "chasse_pp" },
    { name: "Weave from Promenade", href: "weave_pp" },
    { name: "Cross Hesitation", href: "cross_hesitation" },
    { name: "Wing", href: "wing" },
    { name: "Left Whisk", href: "left_whisk" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Contra Check</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="wiRkI12mU2I" start={0} end={36} />
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
// Double Reverse Spin
// Fallaway Reverse And Slip Pivot
// Hesitation Change
// Reverse Pivot
// Reverse Turn

// Following Figures
// Chasse from Promenade
// Weave from Promenade
// Cross Hesitation
// Wing
// Left Whisk