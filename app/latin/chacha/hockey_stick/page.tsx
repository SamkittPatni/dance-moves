import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Advanced Hip Twist", href: "advanced_hip_twist" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Cross Basic", href: "cross_basic" },
    { name: "Curl", href: "curl" },
    { name: "Fan", href: "fan" },
    { name: "Natural Top", href: "natural_top" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Opening Out From Reverse Top", href: "opening_out_from_reverse_top" },
    { name: "Spiral", href: "spiral" },
    { name: "Sweetheart", href: "sweetheart" },
  ];

  const followingFigures = [
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Shoulder To Shoulder Left Side", href: "shoulder_to_shoulder" },
    { name: "Time Step", href: "time_steps" },
    { name: "Alemana", href: "alemana" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Chase", href: "chase" },
    { name: "Turkish Towel", href: "turkish_towel" },
    { name: "Sweetheart", href: "sweetheart" },
    { name: "Follow My Leader", href: "follow_my_leader" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "New York", href: "new_york" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Underarm Turn", href: "spot_turn" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Hockey Stick</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="QO5_Azbgirw" start={230} end={258} />
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
// Advanced Hip Twist
// Closed Hip Twist
// Cross Basic
// Curl
// Fan
// Natural Top
// Open Hip Twist
// Opening Out From Reverse Top
// Spiral
// Sweetheart

// Following Figures
// Open Basic Movement
// Shoulder To Shoulder Left Side
// Time Step
// Alemana
// Open Hip Twist
// Curl
// Chase
// Turkish Towel
// Sweetheart
// Follow My Leader
// Three Cha Cha Chas Forward
// New York
// Spot Turn
// Underarm Turn
// Cuban Break
// Split Cuban Break