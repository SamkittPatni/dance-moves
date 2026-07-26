import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Outside Spin", href: "outside_spin" },
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Hesitation Change", href: "hesitation_change" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Reverse Turn", href: "reverse_turn" },
  ];

  const followingFigures = [
    { name: "Drag Hesitation", href: "drag_hesitation" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Open Telemark", href: "open_telemark" },
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Progressive Chasse To R", href: "progressive_chasse_R" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Hesitation Change", href: "hesitation_change" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Closed Changes</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          Closed Changes (also simply called a waltz basic) can start from both LF and RF.        
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="j6bP6I4Vf-M" start={5} end={77} />
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

// Step 1:-
// Restricted
// Bronze

// Video:-
// https://www.youtube.com/watch?v=j6bP6I4Vf-M
// Timestamp: 1:09-1:35

// Preceding Figures:-
// Natural Turn
// Outside Spin
// Double Reverse Spin
// Hesitation Change
// Reverse Pivot
// Reverse Turn

// Following Figures:-
// Drag Hesitation
// Closed Telemark
// Open Telemark
// Double Reverse Spin
// Progressive Chasse To R
// Reverse Turn
// Natural Spin Turn
// Natural Turn
// Hesitation Change