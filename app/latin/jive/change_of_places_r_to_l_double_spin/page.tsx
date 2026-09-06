import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Basic In Place", href: "basic_in_place" },
    { name: "Fallaway Rock", href: "fallaway_rock" },
    { name: "Link", href: "link" },
    { name: "Mooch", href: "mooch" },
    { name: "Reverse Whip", href: "reverse_whip" },
    { name: "Stalking Walks, Flicks and Break", href: "stalking_walks_flicks_and_break" },
    { name: "Toe Heel Swivels", href: "toe_heel_swivels" },
    { name: "Walks", href: "promenade_walks" },
    { name: "Whip", href: "whip" },
  ];

  const followingFigures = [
    { name: "Chugging", href: "chugging" },
    { name: "Link", href: "link" },
    { name: "Change of Places Left to Right", href: "change_of_places_l_to_r" },
    { name: "Change of Hands Behind Back", href: "change_of_hands_behind_back" },
    { name: "Hip Bump", href: "hip_bump" },
    { name: "American Spin", href: "american_spin" },
    { name: "Stop and Go", href: "stop_and_go" },
    { name: "Miami Special", href: "miami_special" },
    { name: "Shoulder Spin", href: "shoulder_spin" },
    { name: "Catapult", href: "catapult" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Change of Places Right to Left with Double Spin</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="NcE5hNdDKDU" start={0} end={-1} />
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
// Mooch
// Reverse Whip
// Stalking Walks, Flicks and Break
// Toe Heel Swivels
// Walks
// Whip

// Following Figures
// Chugging
// Link
// Change of Places Left to Right
// Change of Hands Behind Back
// Hip Bump
// American Spin
// Stop and Go
// Miami Special
// Shoulder Spin
// Catapult