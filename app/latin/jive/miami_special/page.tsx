import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "American Spin", href: "american_spin" },
    { name: "Catapult", href: "catapult" },
    { name: "Change of Places Left to Right", href: "change_of_places_l_to_r" },
    { name: "Change of Places Right to Left", href: "change_of_places_r_to_l" },
    { name: "Chugging", href: "chugging" },
    { name: "Rolling Off the Arm", href: "rolling_off_the_arm" },
    { name: "Shoulder Spin", href: "shoulder_spin" },
  ];

  const followingFigures = [
    { name: "Hip Bump", href: "hip_bump" },
    { name: "Link", href: "link" },
    { name: "Change of Places Left to Right", href: "change_of_places_l_to_r" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Miami Special</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="3SMk-fG8y8o" start={175} end={199} />
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
// Change of Places Left to Right
// Change of Places Right to Left
// Chugging
// Rolling Off the Arm
// Shoulder Spin

// Following Figures
// Hip Bump
// Link
// Change of Places Left to Right