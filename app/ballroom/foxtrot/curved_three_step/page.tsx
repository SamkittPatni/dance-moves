import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Open Telemark and Feather Ending", href: "open_telemark_feather_ending" },
    { name: "Fallaway Reverse and Slip Pivot", href: "fallaway_reverse_slip_pivot" },
    { name: "Curved Feather to Back Feather", href: "curved_feather_to_back_feather" },
    { name: "Hover Telemark", href: "hover_telemark" },
    { name: "Basic Weave", href: "basic_weave" },
  ];

  const followingFigures = [
    { name: "Back Feather", href: "back_feather" },
    { name: "Curved Feather", href: "curved_feather" },
    { name: "Open Impetus", href: "open_impetus" },
    { name: "Closed Impetus and Feather Finish", href: "closed_impetus_feather_finish" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Curved Three Step</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="EQuWrQB6hl0" start={81} end={94} />
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
// Open Telemark and Feather Ending
// Fallaway Reverse and Slip Pivot
// Curved Feather to Back Feather
// Hover Telemark
// Basic Weave

// Following Figures
// Back Feather
// Curved Feather
// Open Impetus
// Closed Impetus and Feather Finish