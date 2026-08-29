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
    { name: "Closed Change LF", href: "closed_changes" },
    { name: "Whisk", href: "whisk" },
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Contra Check", href: "contra_check" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Progressive Chasse To R", href: "progressive_chasse_R" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Open Telemark", href: "open_telemark" },
    { name: "Fallaway Reverse And Slip Pivot", href: "fallaway_reverse_slip_pivot" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Reverse Pivot</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="gJ47LxQdvWw" start={0} end={-1} />
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
// Closed Change LF
// Whisk
// Double Reverse Spin
// Contra Check
// Reverse Turn
// Progressive Chasse To R
// Closed Telemark
// Open Telemark
// Fallaway Reverse And Slip Pivot