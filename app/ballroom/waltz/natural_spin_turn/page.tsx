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
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Reverse Corte", href: "reverse_corte" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Turning Lock", href: "turning_lock" },
    { name: "Turning Lock to R", href: "turning_lock_R" },
    { name: "Basic Weave", href: "basic_weave" },
    { name: "Left Whisk", href: "left_whisk" },
    { name: "Hover Corte", href: "hover_corte" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Natural Spin Turn</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="oMcUM7A36Fo" start={35} end={88} />
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



// Step 4:-
// Restricted
// Bronze

// Video:-
// https://www.youtube.com/watch?v=oMcUM7A36Fo
// Timestamp: 0:35-1:28

// Preceding Figures:-
// Basic Weave
// Chasse from Promenade
// Closed Change LF
// Closed Telemark
// Natural Turn
// Outside Change
// Outside Spin
// Turning Lock
// Weave from Promenade

// Following Figures:-
// Reverse Turn
// Reverse Corte
// Reverse Pivot
// Turning Lock
// Turning Lock to R
// Basic Weave
// Left Whisk 
// Hover Corte