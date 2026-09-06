import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Reverse Top", href: "reverse_top" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Underarm Turn", href: "spot_turn" },
  ];

  const followingFigures = [
    { name: "Time Step", href: "time_steps" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "New York", href: "new_york" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Side Step", href: "side_steps" },
    { name: "There And Back", href: "there_and_back" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Fan", href: "fan" },
    { name: "Cross Basic", href: "cross_basic" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Alemana", href: "alemana" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Chase", href: "chase" },
    { name: "Turkish Towel", href: "turkish_towel" },
    { name: "Sweetheart", href: "sweetheart" },
    { name: "Follow My Leader", href: "follow_my_leader" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Aida</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="uw8ZYaz3DVE" start={65} end={92} />
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
// Hand To Hand
// Reverse Top
// Spot Turn
// Three Cha Cha Chas Forward
// Underarm Turn

// Following Figures
// Time Step
// Closed Basic Movement
// Open Basic Movement
// New York
// Spot Turn
// Hand To Hand
// Side Step
// There And Back
// Three Cha Cha Chas Forward
// Fan
// Cross Basic
// Cuban Break
// Split Cuban Break
// Alemana
// Open Hip Twist
// Curl
// Chase
// Turkish Towel
// Sweetheart
// Follow My Leader