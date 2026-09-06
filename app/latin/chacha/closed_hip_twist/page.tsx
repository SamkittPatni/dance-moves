import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Natural Top", href: "natural_top" },
    { name: "New York", href: "new_york" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Shoulder To Shoulder Left Side", href: "shoulder_to_shoulder" },
  ];

  const followingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Time Step", href: "time_steps" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Chase", href: "chase" },
    { name: "Turkish Towel", href: "turkish_towel" },
    { name: "Sweetheart", href: "sweetheart" },
    { name: "Follow My Leader", href: "follow_my_leader" },
    { name: "New York", href: "new_york" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Underarm Turn", href: "spot_turn" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Reverse Top", href: "reverse_top" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Closed Hip Twist</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="L4wjSVZySdU" start={486} end={511} />
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
// New York
// Rope Spinning
// Shoulder To Shoulder Left Side

// Following Figures
// Alemana
// Hockey Stick
// Open Basic Movement
// Time Step
// Open Hip Twist
// Curl
// Cuban Break
// Split Cuban Break
// Chase
// Turkish Towel
// Sweetheart
// Follow My Leader
// New York
// Spot Turn
// Underarm Turn
// Three Cha Cha Chas Forward
// Reverse Top