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
    { name: "Curl", href: "curl" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Hip Twist Spiral", href: "hip_twist_spiral" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "New York", href: "new_york" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Spiral", href: "spiral" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Underarm Turn", href: "spot_turn" },
  ];

  const followingFigures = [
    { name: "Aida", href: "aida" },
    { name: "Alemana", href: "alemana" },
    { name: "Chase", href: "chase" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Cross Basic", href: "cross_basic" },
    { name: "Curl", href: "curl" },
    { name: "Fan", href: "fan" },
    { name: "Follow My Leader", href: "follow_my_leader" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Natural Top", href: "natural_top" },
    { name: "New York", href: "new_york" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Side Step", href: "side_steps" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Sweetheart", href: "sweetheart" },
    { name: "There And Back", href: "there_and_back" },
    { name: "Turkish Towel", href: "turkish_towel" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Three Cha Cha Chas</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="zQYD71i2CYg" start={45} end={110} />
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
// Curl
// Hand To Hand
// Hip Twist Spiral
// Hockey Stick
// New York
// Open Basic Movement
// Open Hip Twist
// Rope Spinning
// Shoulder To Shoulder
// Spiral
// Spot Turn
// Underarm Turn

// Following Figures
// Aida
// Alemana
// Chase
// Closed Basic Movement
// Cross Basic
// Curl
// Fan
// Follow My Leader
// Hand To Hand
// Natural Top
// New York
// Open Basic Movement
// Open Hip Twist
// Side Step
// Spot Turn
// Sweetheart
// There And Back
// Turkish Towel