import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Natural Top", href: "natural_top" },
    { name: "Rope Spinning", href: "rope_spinning" },
  ];

  const followingFigures = [
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "There And Back", href: "there_and_back" },
    { name: "Fan", href: "fan" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Side Step", href: "side_steps" },
    { name: "Time Step", href: "time_steps" },
    { name: "Cross Basic", href: "cross_basic" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "New York", href: "new_york" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Underarm Turn", href: "spot_turn" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Natural Opening Out Movement", href: "natural_opening_out_movement" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Spiral", href: "spiral" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Advanced Hip Twist", href: "advanced_hip_twist" },
    { name: "Hip Twist Spiral", href: "hip_twist_spiral" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Rope Spinning</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="RBBscXkSXrE" start={290} end={329} />
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
// Hand To Hand
// Natural Top
// Rope Spinning

// Following Figures
// Closed Basic Movement
// Open Basic Movement
// There And Back
// Fan
// Hand To Hand
// Side Step
// Time Step
// Cross Basic
// Cuban Break
// Split Cuban Break
// New York
// Spot Turn
// Underarm Turn
// Three Cha Cha Chas Forward
// Natural Opening Out Movement
// Closed Hip Twist
// Spiral
// Rope Spinning
// Advanced Hip Twist
// Hip Twist Spiral