import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Advanced Hip Twists", href: "advanced_hip_twist" },
    { name: "Alemana", href: "alemana" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Fan", href: "fan" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Opening Out From Reverse Top", href: "opening_out_from_reverse_top" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Spiral", href: "spiral" },
    { name: "Three Alemanas", href: "three_alemanas" },
    { name: "Three Threes", href: "three_threes" },
  ];

  const followingFigures = [
    { name: "Progressive Walks", href: "progressive_walks" },
    { name: "Spiral", href: "spiral" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Sliding Doors</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="nZc9e3cMuzs" start={71} end={235} />
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
// Advanced Hip Twists
// Alemana
// Closed Hip Twist
// Curl
// Fan
// Open Hip Twist
// Opening Out From Reverse Top
// Rope Spinning
// Spiral
// Three Alemanas
// Three Threes

// Following Figures
// Progressive Walks
// Spiral