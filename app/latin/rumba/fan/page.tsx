import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Cucarachas", href: "cucarachas" },
    { name: "Fencing", href: "fencing" },
    { name: "Hand To Hand", href: "hand_to_hand" },
    { name: "Natural Opening Out Movement", href: "natural_opening_out_movement" },
    { name: "Natural Top", href: "natural_top" },
    { name: "New York", href: "new_york" },
    { name: "Opening Out To Right And Left", href: "opening_out_to_right_and_left" },
    { name: "Progressive Walks", href: "progressive_walks" },
    { name: "Reverse Top", href: "reverse_top" },
    { name: "Rope Spinning", href: "rope_spinning" },
    { name: "Shoulder To Shoulder", href: "shoulder_to_shoulder" },
    { name: "Side Step", href: "side_steps" },
    { name: "Spot Turn", href: "spot_turns" },
    { name: "Cuban Rocks", href: "cuban_rocks" },
    { name: "Three Alemanas", href: "three_alemanas" },
    { name: "Three Threes", href: "three_threes" },
    { name: "Underarm Turn", href: "spot_turns" },
  ];

  const followingFigures = [
    { name: "Alemana", href: "alemana" },
    { name: "Hockey Stick", href: "hockey_stick" },
    { name: "Sliding Doors", href: "sliding_doors" },
    { name: "Fencing", href: "fencing" },
    { name: "Three Alemanas", href: "three_alemanas" },
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
            <VideoLink videoID="iGG3yFjiHZU" start={33} end={56} />
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
// Basic Movements
// Cucarachas
// Fencing
// Hand To Hand
// Natural Opening Out Movement
// Natural Top
// New York
// Opening Out To Right And Left
// Progressive Walks
// Reverse Top
// Rope Spinning
// Shoulder To Shoulder
// Side Step
// Spot Turn
// Cuban Rocks
// Three Alemanas
// Three Threes
// Underarm Turn

// Following Figures
// Alemana
// Hockey Stick
// Sliding Doors
// Fencing
// Three Alemanas