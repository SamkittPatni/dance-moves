import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Progressive Walks Back", href: "progressive_walks" },
    { name: "Underarm Turn", href: "spot_turns" },
  ];

  const followingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Fan", href: "fan" },
    { name: "Natural Opening Out Movement", href: "natural_opening_out_movement" },
    { name: "Opening Out To Right And Left", href: "opening_out_to_right_and_left" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Spiral", href: "spiral" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "Advanced Hip Twists", href: "advanced_hip_twist" },
    { name: "Continuous Hip Twists", href: "continuous_hip_twist" },
    { name: "Circular Hip Twists", href: "circular_hip_twist" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Natural Top</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="B380m5wm2wc" start={0} end={-1} />
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
// Progressive Walks Back
// Underarm Turn

// Following Figures
// Basic Movements
// Fan
// Natural Opening Out Movement
// Opening Out To Right And Left
// Closed Hip Twist
// Spiral
// Rope Spinning
// Hockey Stick
// Advanced Hip Twists
// Continuous Hip Twists
// Circular Hip Twists