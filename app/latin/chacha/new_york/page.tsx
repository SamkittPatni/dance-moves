import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Advanced Hip Twist", href: "advanced_hip_twist" },
    { name: "Aida", href: "aida" },
    { name: "Alemana", href: "alemana" },
    { name: "Basic Movement In Place", href: "basic_movements" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Cross Basic", href: "cross_basic" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Curl", href: "curl" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Hip Twist Spiral", href: "hip_twist_spiral" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "New York", href: "new_york" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Side Step", href: "side_steps" },
    { name: "Spiral", href: "spiral" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Time Step", href: "time_steps" },
    { name: "Underarm Turn", href: "spot_turn" },
  ];

  const followingFigures = [
    { name: "New York", href: "new_york" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Underarm Turn", href: "spot_turn" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Side Step", href: "side_steps" },
    { name: "Time Step", href: "time_steps" },
    { name: "Fan", href: "fan" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">New York</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="cHeTjxD6ddY" start={51} end={86} />
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
// Alemana
// Basic Movement In Place
// Closed Basic Movement
// Closed Hip Twist
// Cross Basic
// Cuban Break
// Curl
// Hand To Hand
// Hip Twist Spiral
// Hockey Stick
// New York
// Open Hip Twist
// Rope Spinning
// Shoulder To Shoulder
// Side Step
// Spiral
// Split Cuban Break
// Spot Turn
// Three Cha Cha Chas Forward
// Time Step
// Underarm Turn

// Following Figures
// New York
// Spot Turn
// Cuban Break
// Split Cuban Break
// Closed Basic Movement
// Open Basic Movement
// Underarm Turn
// Hand To Hand
// Side Step
// Time Step
// Fan
// Closed Hip Twist
// Three Cha Cha Chas Forward