import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Sliding Doors", href: "sliding_doors" },
    { name: "Spot Turn", href: "spot_turns" },
  ];

  const followingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Fan", href: "fan" },
    { name: "Alemana", href: "alemana" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Three Threes", href: "three_threes" },
    { name: "Three Alemanas", href: "three_alemanas" },
    { name: "Underarm Turn", href: "spot_turns" },
    { name: "Natural Top", href: "natural_top" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Progressive Walks</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="h2di055dXlg" start={236} end={264} />
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
// Basic Movements
// Sliding Doors
// Spot Turn

// Following Figures
// Basic Movements
// Fan
// Alemana
// Open Hip Twist
// Curl
// Three Threes
// Three Alemanas
// Underarm Turn
// Natural Top