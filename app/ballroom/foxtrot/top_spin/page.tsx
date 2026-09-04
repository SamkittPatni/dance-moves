import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic Weave", href: "basic_weave" },
    { name: "Bounce Fallaway with Weave Ending", href: "bounce_fallaway_weave_ending" },
    { name: "Closed Impetus and Feather Finish", href: "closed_impetus_feather_finish" },
    { name: "Feather Step", href: "feather_step" },
    { name: "Hover Feather", href: "hover_feather" },
    { name: "Natural Twist Turn", href: "natural_twist_turn" },
    { name: "Natural Weave", href: "natural_weave" },
    { name: "Open Telemark and Feather Ending", href: "open_telemark_feather_ending" },
    { name: "Reverse Turn", href: "reverse_turn" },
  ];

  const followingFigures = [
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Open Telemark and Feather Ending", href: "open_telemark_feather_ending" },
    { name: "Open Telemark, Natural Turn, Outside Swivel and Feather Ending", href: "open_telemark_natural_turn_outside_swivel_feather_ending" },
    { name: "Reverse Wave", href: "reverse_wave" },
    { name: "Three Step", href: "three_step" },
    { name: "Change Of Direction", href: "change_of_direction" },
    { name: "Hover Telemark", href: "hover_telemark" },
    { name: "Fallaway Reverse and Slip Pivot", href: "fallaway_reverse_slip_pivot" },
    { name: "Bounce Fallaway with Weave Ending", href: "bounce_fallaway_weave_ending" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Top Spin</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="N3_GtxuQPvE" start={0} end={-1} />
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
// Bounce Fallaway with Weave Ending
// Closed Impetus and Feather Finish
// Feather Step
// Hover Feather
// Natural Twist Turn
// Natural Weave
// Open Telemark and Feather Ending
// Reverse Turn

// Following Figures
// Reverse Turn
// Closed Telemark
// Open Telemark and Feather Ending
// Open Telemark, Natural Turn, Outside Swivel and Feather Ending
// Reverse Wave
// Three Step
// Change Of Direction
// Hover Telemark
// Fallaway Reverse and Slip Pivot
// Bounce Fallaway with Weave Ending