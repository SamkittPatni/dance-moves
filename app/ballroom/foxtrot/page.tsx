'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function FoxtrotPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Feather Step", href: "/ballroom/foxtrot/feather_step", category: "prebronze", isRestricted: true },
    { name: "Three Step", href: "/ballroom/foxtrot/three_step", category: "prebronze", isRestricted: true },
    { name: "Natural Turn", href: "/ballroom/foxtrot/natural_turn", category: "prebronze", isRestricted: true },
    { name: "Reverse Turn", href: "/ballroom/foxtrot/reverse_turn", category: "prebronze", isRestricted: true },
    { name: "Closed Impetus and Feather Finish", href:"/ballroom/foxtrot/closed_impetus_feather_finish", category:"prebronze", isRestricted: true },
    { name: "Natural Weave", href: "/ballroom/foxtrot/natural_weave", category: "bronze", isRestricted: true },
    { name: "Change of Direction", href: "/ballroom/foxtrot/change_of_direction", category: "bronze", isRestricted: true },
    { name: "Basic Weave", href: "/ballroom/foxtrot/basic_wave", category: "bronze", isRestricted: true },
    { name: "Closed Telemark", href: "/ballroom/foxtrot/closed_telemark", category:"silver", isRestricted: true },
    { name: "Open Telemark and Feather Ending", href: "/ballroom/foxtrot/open_telemark_feather_ending", category:"silver", isRestricted: true },
    { name: "Top Spin", href: "/ballroom/foxtrot/top_spin", category: "silver", isRestricted: true },
    { name: "Hover Feather", href: "/ballroom/foxtrot/hover_telemark", category:"restricted", isRestricted: true },
    { name: "Hover Telemark", href: "/ballroom/foxtrot/hover_telemark", category:"silver", isRestricted: true },
    { name: "Natural Telemark", href: "/ballroom/foxtrot/natural_telemark", category:"silver", isRestricted: true },
    { name: "Hover Cross", href: "/ballroom/foxtrot/hover_cross", category:"silver", isRestricted: true },
    { name: "Open Telemark, Natural Turn, Outside Swivel and Feather Ending", href: "/ballroom/foxtrot/open_telemark_natural_turb_outside_swivel_feather_ending", category:"silver", isRestricted: true },
    { name: "Open Impetus Turn", href:"/ballroom/foxtrot/open_impetus_turn", category:"silver", isRestricted: true },
    { name: "Weave from Promenade Position", href: "/ballroom/foxtrot/weave_pp", category: "silver", isRestricted: true },
    { name: "Reverse Wave", href:"/ballroom/foxtrot/reverse_wave", category:"silver", isRestricted: true },
    { name: "Quick Open Reverse", href: "/ballroom/foxtrot/quick_open_reverse", category: "silver", isRestricted: true },
    { name: "Quick Natural Weave from Promenade Position", href: "/ballroom/foxtrot/quick_natural_weave_pp", category: "silver", isRestricted: true },
    { name: "Reverse Pivot", href: "/ballroom/foxtrot/reverse_pivot", category: "silver", isRestricted: true },
    { name: "Natural Twist Turn", href: "/ballroom/foxtrot/natural_twist_turn", category:"gold", isRestricted: true },
    { name: "Curved Feather to Back Feather", href: "/ballroom/foxtrot/curved_feather_to_back_feather", category:"gold", isRestricted: true },
    { name: "Curved Feather", href: "/ballroom/foxtrot/curved feather", category:"gold", isRestricted: true },
    { name: "Natural Zig Zag from Promenade Position", href: "/ballroom/foxtrot/natural_zig_zag_pp", category:"gold", isRestricted: true },
    { name: "Fallaway Reverse and Slip Pivot", href: "/ballroom/foxtrot/fallaway_reverse_slip_pivot", category:"gold", isRestricted: true },
    { name: "Natural Hover Telemark", href: "/ballroom/foxtrot/natural_hover_telemark", category:"gold", isRestricted: true },
    { name: "Bounce Fallaway with Weave Ending", href: "/ballroom/foxtrot/bounce_fallaway_weave_ending", category:"gold", isRestricted: true },
    { name: "Curved Feather from Promenade Position", href: "/ballroom/foxtrot/curved_feather_pp", category:"gold", isRestricted: true },
    { name: "Curved Three Step", href: "/ballroom/foxtrot/curved_three_step", category:"gold", isRestricted: true },
    { name: "Extended Reverse Wave", href: "/ballroom/foxtrot/outside_swivel", category:"restricted", isRestricted: true },
  ];

  let visibleSteps: any = []
  
  if (category === 'all') {
    visibleSteps = steps.filter((step) => step.name.toLowerCase().includes(query.toLowerCase()))
  }
  else if (category === 'restricted') {
    visibleSteps = steps.filter((step) => step.isRestricted && step.name.toLowerCase().includes(query.toLowerCase()))
  }
  else {
    visibleSteps = steps.filter((step) => step.category === category && step.name.toLowerCase().includes(query.toLowerCase()))
  }

  return (
  <>
    <div className="font-serif font-bold text-center md:text-8xl text-6xl mb-4 text-neutral-300">Foxtrot</div>
    <div className= "flex flex-row w-full h-full gap-4 py-2 pb-8">
      <SearchBar query={ query } onChangeQuery={ setQuery }/>
      <Filter category={ category } onCategoryChange={ setCategory } />
    </div>
    <LinkBar links={ visibleSteps }/>
  </>
  );

}
