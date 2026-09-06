import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "ALL FIGURES", href: "/latin/chacha" },
  ];

  const followingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Basic Movement", href: "basic_movements" },
    { name: "Chase", href: "chase" },
    { name: "Open Hip Twist", href: "open_hip_twist" },
    { name: "Curl", href: "curl" },
    { name: "Follow My Leader", href: "follow_my_leader" },
    { name: "Foot Changes", href: "foot_changes" },
    { name: "New York", href: "new_york" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "There And Back", href: "there_and_back" },
    { name: "Time Step", href: "time_steps" },
    { name: "Fan", href: "fan" },
    { name: "Cross Basic", href: "cross_basic" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Three Cha Cha Chas Back", href: "three_cha_cha_cha" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "Underarm Turn", href: "spot_turn" },
    { name: "Side Step", href: "side_steps" },
    { name: "Natural Top", href: "natural_top" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Reverse Top", href: "reverse_top" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Basic Movements</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="h-O2pMRJm3I" start={41} end={63} />
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

// There are 3 main variations of the Cha Cha basic

// Preceding Figures
// ALL FIGURES

// Following Figures
// Alemana
// Basic Movement
// Chase
// Open Hip Twist
// Curl
// Follow My Leader
// Foot Changes
// New York
// Shoulder To Shoulder
// Hand To Hand
// There And Back
// Time Step
// Fan
// Cross Basic
// Cuban Break
// Split Cuban Break
// Three Cha Cha Chas Back
// Spot Turn
// Underarm Turn
// Hand To Hand
// Side Step
// Natural Top
// Three Cha Cha Chas Forward
// Reverse Top