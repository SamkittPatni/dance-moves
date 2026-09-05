import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Change of Direction", href: "change_of_direction" },
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Heel Pivot", href: "heel_pivot" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
  ];

  const followingFigures = [
    { name: "Natural Turn And Back Lock", href: "natural_turn_back_lock" },
    { name: "Natural Pivot Turn", href: "natural_pivot_turn" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Natural Turn With Hesitation", href: "natural_turn_hesitation" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Forward Lock", href: "forward_lock" },
    { name: "Fish Tail", href: "fishtail" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Running Cross Chasse</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="CD1B6gjLn7w" start={181} end={213} />
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
// Change of Direction
// Double Reverse Spin
// Heel Pivot
// Natural Turn
// Reverse Pivot

// Following Figures
// Natural Turn And Back Lock
// Natural Pivot Turn
// Natural Spin Turn
// Natural Turn With Hesitation
// Natural Turn
// Forward Lock
// Fish Tail