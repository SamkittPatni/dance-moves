'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../searchbar"
import Filter from "../filter"
import { useState } from 'react'

export default function FoxtrotPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Feather Step", href: "/ballroom/foxtrot/feather_step", category: "bronze" },
    { name: "Three Step", href: "/ballroom/foxtrot/three_step", category: "bronze" },
    { name: "Natural Turn", href: "/ballroom/foxtrot/natural_turn", category: "bronze" },
    { name: "Reverse Turn", href: "/ballroom/foxtrot/reverse_turn", category: "bronze" },
    { name: "Closed Impetus and Feather Finish", href:"/ballroom/foxtrot/closed_impetus_feather_finish", category:"bronze" },
    { name: "Natural Weave", href: "/ballroom/foxtrot/natural_weave", category: "bronze" },
    { name: "Change of Direction", href: "/ballroom/foxtrot/change_of_direction", category: "bronze" },
    { name: "Basic Weave", href: "/ballroom/foxtrot/basic_wave", category: "bronze" },
    { name: "Closed Telemark", href: "/ballroom/foxtrot/closed_telemark", category:"silver" },
    { name: "Open Telemark and Feather Ending", href: "/ballroom/foxtrot/open_telemark_feather_ending", category:"silver" },
    { name: "Top Spin", href: "/ballroom/foxtrot/top_spin", category: "silver" },
    { name: "Hover Feather", href: "/ballroom/foxtrot/hover_telemark", category:"restricted" },
    { name: "Hover Telemark", href: "/ballroom/foxtrot/hover_telemark", category:"silver" },
    { name: "Natural Telemark", href: "/ballroom/foxtrot/natural_telemark", category:"silver" },
    { name: "Hover Cross", href: "/ballroom/foxtrot/hover_cross", category:"silver" },
    { name: "Open Telemark, Natural Turn, Outside Swivel and Feather Ending", href: "/ballroom/foxtrot/open_telemark_natural_turb_outside_swivel_feather_ending", category:"silver" },
    { name: "Open Impetus Turn", href:"/ballroom/foxtrot/open_impetus_turn", category:"silver" },
    { name: "Weave from Promenade Position", href: "/ballroom/foxtrot/weave_pp", category: "silver" },
    { name: "Reverse Wave", href:"/ballroom/foxtrot/reverse_wave", category:"silver" },
    { name: "Quick Open Reverse", href: "/ballroom/foxtrot/quick_open_reverse", category: "silver" },
    { name: "Quick Natural Weave from Promenade Position", href: "/ballroom/foxtrot/quick_natural_weave_pp", category: "silver" },
    { name: "Reverse Pivot", href: "/ballroom/foxtrot/reverse_pivot", category: "silver" },
    { name: "Natural Twist Turn", href: "/ballroom/foxtrot/natural_twist_turn", category:"gold" },
    { name: "Curved Feather", href: "/ballroom/foxtrot/curved feather", category:"gold" },
    { name: "Back Feather", href: "/ballroom/foxtrot/back_feather", category:"gold" },
    { name: "Natural Zig Zag from Promenade Position", href: "/ballroom/foxtrot/natural_zig_zag_pp", category:"gold" },
    { name: "Fallaway Reverse and Slip Pivot", href: "/ballroom/foxtrot/fallaway_reverse_slip_pivot", category:"gold" },
    { name: "Natural Hover Telemark", href: "/ballroom/foxtrot/natural_hover_telemark", category:"gold" },
    { name: "Bounce Fallaway with Weave Ending", href: "/ballroom/foxtrot/bounce_fallaway_weave_ending", category:"gold" },
    { name: "Curved Feather from Promenade Position", href: "/ballroom/foxtrot/curved_feather_pp", category:"gold" },
    { name: "Curved Three Step", href: "/ballroom/foxtrot/curved_three_step", category:"gold" },
    { name: "Extended Reverse Wave", href: "/ballroom/foxtrot/outside_swivel", category:"restricted" },
  ];

  let visibleSteps: any = []
  
  if (category === 'all') {
    visibleSteps = steps.filter((step) => step.name.toLowerCase().includes(query.toLowerCase()))
  }
  else {
    visibleSteps = steps.filter((step) => step.category === category && step.name.toLowerCase().includes(query.toLowerCase()))
  }

  return (
  <>
    <SearchBar query={ query } onChangeQuery={ setQuery }/>
    <Filter category={ category } onCategoryChange={ setCategory } />
    <LinkBar links={ visibleSteps }/>
  </>
  );

}