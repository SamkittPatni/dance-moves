import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Aida", href: "aida" },
    { name: "Alemana", href: "alemana" },
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Fencing", href: "fencing" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Three Alemanas", href: "three_alemanas" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "New York", href: "new_york" },
    { name: "Progressive Walks", href: "progressive_walks" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Side Step", href: "side_steps" },
    { name: "Spot Turn", href: "spot_turns" },
    { name: "Cuban Rocks", href: "cuban_rocks" },
    { name: "Underarm Turn", href: "spot_turns" },
  ];

  const followingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Fan", href: "fan" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "New York", href: "new_york" },
    { name: "Spot Turn", href: "spot_turns" },
    { name: "Underarm Turn", href: "spot_turns" },
    { name: "Side Step", href: "side_steps" },
    { name: "Cuban Rock", href: "cuban_rocks" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Cuban Rocks</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="pPNGIFKiPnc" start={188} end={223} />
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
// Basic Movements
// Fencing
// Rope Spinning
// Three Alemanas
// Hand To Hand
// New York
// Progressive Walks
// Shoulder To Shoulder
// Side Step
// Spot Turn
// Cuban Rocks
// Underarm Turn

// Following Figures
// Basic Movements
// Fan
// Hand To Hand
// New York
// Spot Turn
// Underarm Turn
// Side Step
// Cuban Rock