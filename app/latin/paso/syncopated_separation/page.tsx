import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Sur Place", href: "sur_place" },
    { name: "Basic Movement", href: "basic_movement" },
    { name: "Chasse to Right and Left", href: "chasses_r_l" },
    { name: "Separation", href: "separation" },
  ];

  const followingFigures = [
    { name: "Sur Place", href: "sur_place" },
    { name: "Basic Movement", href: "basic_movement" },
    { name: "Chasse to Right", href: "chasses_r_l" },
    { name: "Separation", href: "separation" },
    { name: "Attack", href: "deplacement" },
    { name: "Ecart", href: "ecart" },
    { name: "Huit", href: "huit" },
    { name: "Sixteen", href: "sixteen" },
    { name: "Promenade Link", href: "promenade_link" },
    { name: "Chasse Cape", href: "chasse_cape" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Syncopated Separation</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="g-r7nDVEM7c" start={0} end={-1} />
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
// Sur Place
// Basic Movement
// Chasse to Right and Left
// Separation

// Following Figures
// Sur Place
// Basic Movement
// Chasse to Right
// Separation
// Attack
// Ecart
// Huit
// Sixteen
// Promenade Link
// Chasse Cape