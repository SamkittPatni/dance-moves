import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Circular Hip Twists", href: "circular_hip_twist" },
    { name: "Continuous Hip Twists", href: "continuous_hip_twist" },
    { name: "Natural Top", href: "natural_top" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Three Alemanas", href: "three_alemanas" },
    { name: "Three Threes", href: "three_threes" },
  ];

  const followingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "Sliding Doors", href: "sliding_doors" },
    { name: "Fencing", href: "fencing" },
    { name: "Three Alemanas", href: "three_alemanas" },
    { name: "Open Basic Movements", href: "basic_movements" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Three Threes", href: "three_threes" },
    { name: "New York", href: "new_york" },
    { name: "Spot Turn", href: "spot_turns" },
    { name: "Underarm Turn", href: "spot_turns" },
    { name: "Reverse Top", href: "reverse_top" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Advanced Hip Twist</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="cY1qaAWtxho" start={212} end={249} />
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
// Alemana
// Circular Hip Twists
// Continuous Hip Twists
// Natural Top
// Rope Spinning
// Three Alemanas
// Three Threes

// Following Figures
// Alemana
// Hockey Stick
// Sliding Doors
// Fencing
// Three Alemanas
// Open Basic Movements
// Open Hip Twist
// Curl
// Three Threes
// New York
// Spot Turn
// Underarm Turn
// Reverse Top