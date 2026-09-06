import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Change of Places Left to Right", href: "change_of_places_l_to_r" },
    { name: "Rolling Off the Arm", href: "rolling_off_the_arm" },
    { name: "Spanish Arms", href: "spanish_arms" },
    { name: "Windmill", href: "windmill" },
  ];

  const followingFigures = [
    { name: "Toe Heel Swivels", href: "toe_heel_swivels" },
    { name: "Stop and Go", href: "stop_and_go" },
    { name: "Hip Bump", href: "hip_bump" },
    { name: "Change of Hands Behind Back", href: "change_of_hands_behind_back" },
    { name: "Link", href: "link" },
    { name: "Change of Places Left to Right", href: "change_of_places_l_to_r" },
    { name: "Windmill", href: "windmill" },
    { name: "Spanish Arms", href: "spanish_arms" },
    { name: "Rolling Off the Arm", href: "rolling_off_the_arm" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Windmill</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="8B-6hS5gON0" start={207} end={228} />
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
// Change of Places Left to Right
// Rolling Off the Arm
// Spanish Arms
// Windmill

// Following Figures
// Toe Heel Swivels
// Stop and Go
// Hip Bump
// Change of Hands Behind Back
// Link
// Change of Places Left to Right
// Windmill
// Spanish Arms
// Rolling Off the Arm