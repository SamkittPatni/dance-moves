import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Closed Impetus and Feather Finish", href: "closed_impetus_feather_finish" },
    { name: "Feather Step", href: "feather_step" },
    { name: "Hover Cross", href: "hover_cross" },
    { name: "Hover Feather", href: "hover_feather" },
    { name: "Natural Hover Telemark", href: "natural_hover_telemark" },
    { name: "Natural Telemark", href: "natural_telemark" },
    { name: "Natural Twist Turn", href: "natural_twist_turn" },
    { name: "Natural Zig-Zag from PP", href: "natural_zig_zag_pp" },
    { name: "Open Telemark, Natural Turn, Outside Swivel and Feather Ending", href: "open_telemark_natural_turn_outside_swivel_feather_ending" },
    { name: "Top Spin", href: "top_spin" },
  ];

  const followingFigures = [
    { name: "Feather Step", href: "feather_step" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Natural Weave", href: "natural_weave" },
    { name: "Natural Telemark", href: "natural_telemark" },
    { name: "Hover Cross", href: "hover_cross" },
    { name: "Natural Twist Turn", href: "natural_twist_turn" },
    { name: "Curved Feather to Back Feather", href: "curved_feather_to_back_feather" },
    { name: "Natural Hover Telemark", href: "natural_hover_telemark" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Closed Telemark</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="x2-9MqIwabs" start={0} end={-1} />
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
// Closed Impetus and Feather Finish
// Feather Step
// Hover Cross
// Hover Feather
// Natural Hover Telemark
// Natural Telemark
// Natural Twist Turn
// Natural Zig-Zag from PP
// Open Telemark, Natural Turn, Outside Swivel and Feather Ending
// Top Spin

// Following Figures
// Feather Step
// Natural Turn
// Natural Weave
// Natural Telemark
// Hover Cross
// Natural Twist Turn
// Curved Feather to Back Feather
// Natural Hover Telemark