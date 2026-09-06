import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic In Place", href: "basic_in_place" },
    { name: "Fallaway Rock", href: "fallaway_rock" },
    { name: "Link", href: "link" },
    { name: "Reverse Whip", href: "reverse_whip" },
    { name: "Whip", href: "whip" },
  ];

  const followingFigures = [
    { name: "Basic In Place", href: "basic_in_place" },
    { name: "Fallaway Rock", href: "fallaway_rock" },
    { name: "Fallaway Throwaway", href: "fallaway_throwaway" },
    { name: "Change of Places Right to Left", href: "change_of_places_r_to_l" },
    { name: "Walks", href: "promenade_walks" },
    { name: "Stalking Walks, Flicks and Break", href: "stalking_walks_flicks_and_break" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Mooch</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="Rbt0TuIPVgE" start={43} end={61} />
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
// Basic In Place
// Fallaway Rock
// Link
// Reverse Whip
// Whip

// Following Figures
// Basic In Place
// Fallaway Rock
// Fallaway Throwaway
// Change of Places Right to Left
// Walks
// Stalking Walks, Flicks and Break