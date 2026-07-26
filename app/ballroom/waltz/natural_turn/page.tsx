import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Back Lock", href: "back_lock" },
    { name: "Basic Weave", href: "basic_weave" },
    { name: "Chasse From PP", href: "chasse_pp" },
    { name: "Closed Change", href: "closed_changes" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Cross Hesitation", href: "cross_hesitation" },
    { name: "Drag Hesitation", href: "drag_hesitation" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Outside Change", href: "outside_change" },
    { name: "Outside Spin", href: "outside_spin" },
    { name: "Progressive Chasse To R", href: "progressive_chasse_R" },
    { name: "Reverse Corte", href: "reverse_corte" },
    { name: "Turning Lock", href: "turning_lock" },
    { name: "Weave From PP", href: "weave_pp" },
  ];

  const followingFigures = [
    { name: "Closed Change", href: "closed_changes" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Natural Turn", href: "natural_turn" },
    { name: "Hesitation Change", href: "hesitation_change" },
    { name: "Closed Impetus", href: "closed_impetus" },
    { name: "Open Impetus", href: "open_impetus" },
    { name: "Outside Change", href: "outside_change" },
    { name: "Fallaway Whisk", href: "fallaway_whisk" },
    { name: "Back Whisk", href: "back_whisk" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Natural Turn</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          The Natural Turn is a basic figure which consists of 6 whole counts. It can also be danced as a 3 count figure, with either counts 1-3 or 4-6.
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="AgqXSjVJ4bc" start={5} end={77} />
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

// Step 2:-
// Restricted
// Bronze

// Video:-
// https://www.youtube.com/watch?v=AgqXSjVJ4bc
// Timestamp: 0:05-1:17

// Preceding Figures:-
// Back Lock
// Basic Weave
// Chasse From Promenade Position
// Closed Change LF
// Closed Telemark
// Cross Hesitation
// Drag Hesitation
// Natural Turn
// Outside Change
// Outside Spin
// Progressive Chasse To R
// Reverse Corte
// Turning Lock
// Weave From Promenade Position

// Following Figures:-
// Closed Change RF
// Natural Spin Turn (at corner)
// Natural Turn (at corner; or Natural Turn can be followed by 1-3 of Natural Turn to end backing center, then followed by Outside Change turning 1/8 to L)
// Hesitation Change (at corner)
// Closed Impetus (after 1-3)
// Open Impetus (after 1-3)
// Outside Change (after 1-3, ending BDC, either underturned, or commenced LOD)
// Fallaway Whisk (after 1-3 Natural Turn)
// Back Whisk (after 1-3 Natural Turn)