import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Basic Movement In Place", href: "basic_movements" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Side Step", href: "side_steps" },
    { name: "Time Step", href: "time_steps" },
    { name: "Underarm Turn", href: "spot_turn" },
  ];

  const followingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Cross Basic", href: "cross_basic" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Fan", href: "fan" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "New York", href: "new_york" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Side Step", href: "side_steps" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "There And Back", href: "there_and_back" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Time Step", href: "time_steps" },
    { name: "Underarm Turn", href: "spot_turn" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Shoulder to Shoulder</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="FUT9tN2sYpM" start={191} end={225} />
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
// Basic Movement In Place
// Closed Basic Movement
// Hockey Stick
// Shoulder To Shoulder
// Side Step
// Time Step
// Underarm Turn

// Following Figures
// Alemana
// Closed Basic Movement
// Closed Hip Twist
// Cross Basic
// Cuban Break
// Fan
// Hand To Hand
// New York
// Open Basic Movement
// Shoulder To Shoulder
// Side Step
// Split Cuban Break
// Spot Turn
// There And Back
// Three Cha Cha Chas Forward
// Time Step
// Underarm Turn