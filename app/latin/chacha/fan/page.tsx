import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Aida", href: "aida" },
    { name: "Alemana", href: "alemana" },
    { name: "Basic Movement In Place", href: "basic_movements" },
    { name: "Closed Basic Movement", href: "basic_movements" },
    { name: "Cross Basic", href: "cross_basic" },
    { name: "Cuban Break", href: "cuban_breaks" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Natural Opening Out Movement", href: "natural_opening_out_movement" },
    { name: "Natural Top", href: "natural_top" },
    { name: "New York", href: "new_york" },
    { name: "Open Basic Movement", href: "basic_movements" },
    { name: "Reverse Top", href: "reverse_top" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Side Step", href: "side_steps" },
    { name: "Split Cuban Break", href: "cuban_breaks" },
    { name: "Spot Turn", href: "spot_turn" },
    { name: "There And Back", href: "there_and_back" },
    { name: "Three Cha Cha Chas Back", href: "three_cha_cha_cha" },
    { name: "Three Cha Cha Chas Forward", href: "three_cha_cha_cha" },
    { name: "Time Step", href: "time_steps" },
    { name: "Underarm Turn", href: "spot_turn" },
  ];

  const followingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Hockey Stick", href: "hockey_stick" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Fan</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="4jUKBcFBlN8" start={301} end={334} />
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
// Aida
// Alemana
// Basic Movement In Place
// Closed Basic Movement
// Cross Basic
// Cuban Break
// Hand To Hand
// Natural Opening Out Movement
// Natural Top
// New York
// Open Basic Movement
// Reverse Top
// Rope Spinning
// Shoulder To Shoulder
// Side Step
// Split Cuban Break
// Spot Turn
// There And Back
// Three Cha Cha Chas Back
// Three Cha Cha Chas Forward
// Time Step
// Underarm Turn

// Following Figures
// Alemana
// Hockey Stick