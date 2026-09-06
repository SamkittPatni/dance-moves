import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Criss Cross Bota Fogos", href: "criss_cross_bota_fogos" },
    { name: "Foot Changes", href: "foot_changes" },
    { name: "Maypole", href: "maypole" },
    { name: "Samba Locks", href: "samba_locks" },
    { name: "Side Samba Walk", href: "samba_walks" },
    { name: "Basic Movement", href: "basic_movements" },
  ];

  const followingFigures = [
    { name: "Basic Movements", href: "basic_movements" },
    { name: "Whisk", href: "whisks" },
    { name: "Stationary Samba Walk", href: "samba_walks" },
    { name: "Bota Fogos To Promenade and Counter Promenade", href: "bota_fogos_to_promenade_and_counter_promenade" },
    { name: "Argentine Crosses", href: "argentine_crosses" },
    { name: "Criss Cross Bota Fogos", href: "criss_cross_bota_fogos" },
    { name: "Maypole", href: "maypole" },
    { name: "Foot Changes", href: "foot_changes" },
    { name: "Samba Locks", href: "samba_locks" },
    { name: "Samba Walks", href: "samba_walks" },
    { name: "Rolling Off The Arm", href: "rolling_off_the_arm" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Criss Cross Voltas</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="GdwUaPZbjmY" start={154} end={225} />
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
// Criss Cross Bota Fogos
// Foot Changes
// Maypole
// Samba Locks
// Side Samba Walk
// Basic Movement

// Following Figures
// Basic Movements
// Whisk
// Stationary Samba Walk
// Bota Fogos To Promenade and Counter Promenade
// Argentine Crosses
// Criss Cross Bota Fogos
// Maypole
// Foot Changes
// Samba Locks
// Samba Walks
// Rolling Off The Arm