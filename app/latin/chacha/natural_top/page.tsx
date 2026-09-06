import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic Movement In Place", href: "basic_movements" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Three Cha Cha Chas Back", href: "three_cha_cha_cha" },
    { name: "Underarm Turn", href: "spot_turn" },
  ];

  const followingFigures = [
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Fan", href: "fan" },
    { name: "Natural Opening Out Movement", href: "natural_opening_out_movement" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Spiral", href: "spiral" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Advanced Hip Twist", href: "advanced_hip_twist" },
    { name: "Hip Twist Spiral", href: "hip_twist_spiral" },
    { name: "Hockey Stick", href: "hockey_stick" },
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
            <VideoLink videoID="eXSzXciV1f4" start={196} end={215} />
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
// Basic Movement In Place
// Closed Basic Movement
// Open Basic Movement
// Three Cha Cha Chas Back
// Underarm Turn

// Following Figures
// Open Basic Movement
// Closed Basic Movement
// Fan
// Natural Opening Out Movement
// Closed Hip Twist
// Spiral
// Rope Spinning
// Advanced Hip Twist
// Hip Twist Spiral
// Hockey Stick