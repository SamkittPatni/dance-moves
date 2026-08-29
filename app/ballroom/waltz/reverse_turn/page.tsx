import VideoLink from "@/app/ui/steps/videolink";
import FigureList from "@/app/ui/steps/figurelist";
import { Suspense } from "react";

export default function Page() {
  const precedingFigures = [
    { name: "Closed Change RF", href: "closed_changes" },
    { name: "Closed Impetus", href: "closed_impetus" },
    { name: "Closed Wing", href: "closed_wing" },
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Fallaway Reverse And Slip Pivot", href: "fallaway_reverse_slip_pivot" },
    { name: "Hesitation Change", href: "hesitation_change" },
    { name: "Natural Spin Turn", href: "natural_spin_turn" },
    { name: "Outside Spin", href: "outside_spin" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Reverse Turn", href: "reverse_turn" },
    { name: "Wing", href: "wing" },
  ];

  const followingFigures = [
    { name: "Drag Hesitation", href: "drag_hesitation" },
    { name: "Closed Change LF", href: "closed_changes" },
    { name: "Whisk", href: "whisk" },
    { name: "Double Reverse Spin", href: "double_reverse_spin" },
    { name: "Fallaway Reverse And Slip Pivot", href: "fallaway_reverse_slip_pivot" },
    { name: "Progressive Chasse To R", href: "progressive_chasse_R" },
    { name: "Basic Weave", href: "basic_weave" },
    { name: "Reverse Pivot", href: "reverse_pivot" },
    { name: "Reverse Corte", href: "reverse_corte" },
    { name: "Closed Telemark", href: "closed_telemark" },
    { name: "Open Telemark", href: "open_telemark" },
    { name: "Contra Check", href: "contra_check" },
    { name: "Left Whisk", href: "left_whisk" },
    { name: "Hover Corte", href: "hover_corte" },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full bg-black/75 text-justify md:px-10">
        <h1 className="font-serif font-bold text-center">Reverse Turn</h1>
        <hr className="mx-3 pb-5 border-gray-600" />
        <div className="px-3">
          {/* Closed Changes (also simply called a waltz basic) can start from both LF and RF.         */}
        </div>
        <div className="flex flex-col justify-center py-5">
          <h2 className="font-bold text-2xl text-center pb-2">Video</h2>
          <hr className="mx-3 pb-5 border-gray-600" />
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoLink videoID="G1xMWMNiO24" start={35} end={80} />
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

// Step 3:-
// Restricted
// Bronze

// Video:-
// https://www.youtube.com/watch?v=G1xMWMNiO24
// Timestamp: 0:35-1:20

// Preceding Figures:-
// Closed Change RF
// Closed Impetus
// Closed Wing
// Double Reverse Spin
// Fallaway Reverse And Slip Pivot
// Hesitation Change
// Natural Spin Turn
// Outside Spin
// Reverse Pivot
// Wing

// Following Figures:-
// Drag Hesitation
// Closed Change LF
// Whisk
// Double Reverse Spin
// Fallaway Reverse And Slip Pivot
// Progressive Chasse To R
// Basic Weave 
// Reverse Pivot 
// Reverse Corte 
// Closed Telemark
// Open Telemark
// Contra Check
// Left Whisk
// Hover Corte