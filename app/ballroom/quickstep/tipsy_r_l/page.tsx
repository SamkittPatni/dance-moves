import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Back Lock", href: "backwards_lock" },
    { name: "Cross Swivel", href: "cross_swivel" },
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Heel Pivot", href: "heel_pivot" },
    { name: "Hover Corte", href: "hover_corte" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Natural Turn And Back Lock", href: "natural_turn_back_lock" },
    { name: "Progressive Chasse To Right", href: "progressive_chasse_r" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Tipple Chasse To Right", href: "tipple_chasse" },
    { name: "Tipsy To L", href: "tipsy_r_l" },
  ];

  const followingFigures = [
    { name: "Forward Lock", href: "forward_lock" },
    { name: "Tipsy To L", href: "tipsy_r_l" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Tipsy to Right and Left</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="a4D6W5Zt9n8" start={9} end={48} />
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
// Back Lock
// Cross Swivel
// Double Reverse Spin
// Heel Pivot
// Hover Corte
// Natural Turn
// Natural Turn And Back Lock
// Progressive Chasse To Right
// Reverse Pivot
// Tipple Chasse To Right
// Tipsy To L

// Following Figures
// Forward Lock
// Tipsy To L