import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Advanced Hip Twists", href: "advanced_hip_twist" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Fan", href: "fan" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Opening Out From Reverse Top", href: "opening_out_from_reverse_top" },
    { name: "Progressive Walks", href: "progressive_walks" },
    { name: "Spiral", href: "spiral" },
    { name: "Spot Turn", href: "spot_turns" },
    { name: "Three Threes", href: "three_threes" },
  ];

  const followingFigures = [
    { name: "Circular Hip Twists", href: "circular_hip_twist" },
    { name: "Continuous Hip Twists", href: "continuous_hip_twist" },
    { name: "Advanced Hip Twists", href: "advanced_hip_twist" },
    { name: "Sliding Doors", href: "sliding_doors" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Spiral", href: "spiral" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Natural Opening Out Movement", href: "natural_opening_out_movement" },
    { name: "Cuban Rocks", href: "cuban_rocks" },
    { name: "Side Step", href: "side_steps" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "New York", href: "new_york" },
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Fan", href: "fan" },
    { name: "Opening Out To Right And Left", href: "opening_out_to_right_and_left" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Three Alemanas</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="tjSaH8XPyMA" start={742} end={802} />
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
// Closed Hip Twist
// Curl
// Fan
// Hockey Stick
// Open Hip Twist
// Opening Out From Reverse Top
// Progressive Walks
// Spiral
// Spot Turn
// Three Threes

// Following Figures
// Circular Hip Twists
// Continuous Hip Twists
// Advanced Hip Twists
// Sliding Doors
// Rope Spinning
// Spiral
// Closed Hip Twist
// Natural Opening Out Movement
// Cuban Rocks
// Side Step
// Hand To Hand
// New York
// Basic Movements
// Fan
// Opening Out To Right And Left