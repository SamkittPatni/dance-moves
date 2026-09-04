import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Hover Telemark", href: "hover_telemark" },
    { name: "Hover Telemark to PP", href: "hover_telemark_to_pp" },
    { name: "Open Impetus", href: "open_impetus" },
    { name: "Open Telemark, Natural Turn, Outside Swivel and Feather Ending", href: "open_telemark_natural_turn_outside_swivel_feather_ending" },
  ];

  const followingFigures = [
    { name: "Three Step", href: "three_step" },
    { name: "Change Of Direction", href: "change_of_direction" },
    { name: "Hover Telemark", href: "hover_telemark" },
    { name: "Reverse Wave", href: "reverse_wave" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Open Telemark and Feather Ending", href: "open_telemark_feather_ending" },
    { name: "Fallaway Reverse and Slip Pivot", href: "fallaway_reverse_slip_pivot" },
    { name: "Bounce Fallaway with Weave Ending", href: "bounce_fallaway_weave_ending" },
    { name: "Open Telemark, Natural Turn, Outside Swivel and Feather Ending", href: "open_telemark_natural_turn_outside_swivel_feather_ending" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Natural Zig-Zag from PP</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="xh_qXYt6BYU" start={0} end={165} />
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
// Hover Telemark
// Hover Telemark to PP
// Open Impetus
// Open Telemark, Natural Turn, Outside Swivel and Feather Ending
// Outside Swivel

// Following Figures
// Three Step
// Change Of Direction
// Hover Telemark
// Reverse Wave
// Reverse Turn
// Closed Telemark
// Open Telemark and Feather Ending
// Fallaway Reverse and Slip Pivot
// Bounce Fallaway with Weave Ending
// Open Telemark, Natural Turn, Outside Swivel and Feather Ending