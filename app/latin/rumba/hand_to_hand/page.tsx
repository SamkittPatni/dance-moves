import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Side Step", href: "side_steps" },
    { name: "Alemana", href: "alemana" },
    { name: "Cuban Rocks", href: "cuban_rocks" },
    { name: "Fencing", href: "fencing" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "New York", href: "new_york" },
    { name: "Progressive Walks", href: "progressive_walks" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Spot Turn", href: "spot_turns" },
    { name: "Three Alemanas", href: "three_alemanas" },
    { name: "Underarm Turn", href: "spot_turns" },
  ];

  const followingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Cuban Rock", href: "cuban_rocks" },
    { name: "Fan", href: "fan" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "New York", href: "new_york" },
    { name: "Spot Turn", href: "spot_turns" },
    { name: "Underarm Turn", href: "spot_turns" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Side Step", href: "side_steps" },
    { name: "Closed Hip Twist", href: "closed_hip_twist" },
    { name: "Aida", href: "aida" },
    { name: "Progressive Walks", href: "progressive_walks" },
    { name: "Spiral", href: "spiral" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Hand to Hand</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="sOiZrKui10I" start={6} end={26} />
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
// Basic Movements
// Side Step
// Alemana
// Cuban Rocks
// Fencing
// Hand To Hand
// New York
// Progressive Walks
// Rope Spinning
// Shoulder To Shoulder
// Spot Turn
// Three Alemanas
// Underarm Turn

// Following Figures
// Basic Movements
// Cuban Rock
// Fan
// Rope Spinning
// New York
// Spot Turn
// Underarm Turn
// Hand To Hand
// Side Step
// Closed Hip Twist
// Aida
// Progressive Walks
// Spiral