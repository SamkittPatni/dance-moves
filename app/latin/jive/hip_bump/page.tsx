import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "American Spin", href: "american_spin" },
    { name: "Catapult", href: "catapult" },
    { name: "Change of Hands Behind Back", href: "change_of_hands_behind_back" },
    { name: "Change of Places Left to Right", href: "change_of_places_l_to_r" },
    { name: "Change of Places Right to Left", href: "change_of_places_r_to_l" },
    { name: "Chugging", href: "chugging" },
    { name: "Fallaway Throwaway", href: "fallaway_throwaway" },
    { name: "Hip Bump", href: "hip_bump" },
    { name: "Miami Special", href: "miami_special" },
    { name: "Shoulder Spin", href: "shoulder_spin" },
    { name: "Simple Spin", href: "simple_spin" },
    { name: "Spanish Arms", href: "spanish_arms" },
    { name: "Stop and Go", href: "stop_and_go" },
    { name: "Whip Throwaway", href: "whip_throwaway" },
    { name: "Windmill", href: "windmill" },
  ];

  const followingFigures = [
    { name: "Link", href: "link" },
    { name: "Change of Places Left to Right", href: "change_of_places_l_to_r" },
    { name: "Change of Hands Behind Back", href: "change_of_hands_behind_back" },
    { name: "Hip Bump", href: "hip_bump" },
    { name: "American Spin", href: "american_spin" },
    { name: "Stop and Go", href: "stop_and_go" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Hip Bump</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="IcusBPz_I38" start={455} end={498} />
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
// American Spin
// Catapult
// Change of Hands Behind Back
// Change of Places Left to Right
// Change of Places Right to Left
// Chugging
// Fallaway Throwaway
// Hip Bump
// Miami Special
// Shoulder Spin
// Simple Spin
// Spanish Arms
// Stop and Go
// Whip Throwaway
// Windmill

// Following Figures
// Link
// Change of Places Left to Right
// Change of Hands Behind Back
// Hip Bump
// American Spin
// Stop and Go