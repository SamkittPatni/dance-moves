import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Advanced Hip Twist", href: "advanced_hip_twist" },
    { name: "Aida", href: "aida" },
    { name: "Chase", href: "chase" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Curl", href: "curl" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Spiral", href: "spiral" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Time Step", href: "time_steps" },
    { name: "Turkish Towel", href: "turkish_towel" },
  ];

  const followingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Time Step", href: "time_steps" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Chase", href: "chase" },
    { name: "Turkish Towel", href: "turkish_towel" },
    { name: "Advanced Hip Twist", href: "advanced_hip_twist" },
    { name: "Hip Twist Spiral", href: "hip_twist_spiral" },
    { name: "Sweetheart", href: "sweetheart" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Follow My Leader</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="_OSKTX1TN2c" start={190} end={219} />
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
// Aida
// Chase
// Closed Hip Twist
// Cuban Break
// Curl
// Hockey Stick
// Open Basic Movement
// Open Hip Twist
// Spiral
// Split Cuban Break
// Spot Turn
// Three Cha Cha Chas Forward
// Time Step
// Turkish Towel

// Following Figures
// Alemana
// Open Basic Movement
// Time Step
// Open Hip Twist
// Curl
// Cuban Break
// Split Cuban Break
// Chase
// Turkish Towel
// Advanced Hip Twist
// Hip Twist Spiral
// Sweetheart