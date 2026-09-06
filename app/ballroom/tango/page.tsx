'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function TangoPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Progressive Side Step", href: "/ballroom/tango/progressive_side_step", category: "prebronze", isRestricted: true },
    { name: "Progressive Link", href: "/ballroom/tango/progressive_link", category: "prebronze", isRestricted: true },
    { name: "Closed Promenade", href: "/ballroom/tango/closed_promenade", category: "prebronze", isRestricted: true },
    { name: "Rock Turn", href: "/ballroom/tango/rock_turn", category: "prebronze", isRestricted: true },
    { name: "Open Reverse Turn, Follower Outside", href: "/ballroom/tango/open_reverse_turn_outside", category: "prebronze", isRestricted: true },
    { name: "Back Corte", href:"/ballroom/tango/back_corte", category:"prebronze", isRestricted: true },
    { name: "Open and Closed Finish", href: "/ballroom/tango/open_and_closed_finish", category: "prebronze", isRestricted: true },
    { name: "Open Reverse Turn, Follower In Line", href: "/ballroom/tango/open_reverse_turn_inside", category: "bronze", isRestricted: true },
    { name: "Progressive Side Step Reverse Turn", href: "/ballroom/tango/progressive_side_step_reverse_turn", category: "bronze", isRestricted: true },
    { name: "Open Promenade", href: "/ballroom/tango/open_promenade", category: "bronze", isRestricted: true },
    { name: "LF and RF Rocks", href: "/ballroom/tango/lf_rf_rocks", category: "bronze", isRestricted: true },
    { name: "Natural Twist Turn", href: "/ballroom/tango/natural_twist_turn", category: "bronze", isRestricted: true },
    { name: "Natural Promenade Turn", href: "/ballroom/tango/natural_promenade_turn", category: "bronze", isRestricted: true },
    { name: "Promenade Link", href: "/ballroom/tango/promenade_link", category:"silver", isRestricted: true },
    { name: "Four Step", href: "/ballroom/tango/four_step", category:"silver", isRestricted: true },
    { name: "Back Open Promenade", href:"/ballroom/tango/back_open_promenade", category:"silver", isRestricted: true },
    { name: "Outside Swivel", href: "/ballroom/tango/outside_swivel", category:"silver", isRestricted: true },
    { name: "Reverse Outside Swivel", href: "/ballroom/tango/reverse_outside_swivel", category:"silver", isRestricted: true },
    { name: "Fallaway Promenade", href: "/ballroom/tango/fallaway_promenade", category:"silver", isRestricted: true },
    { name: "Four Step Change", href: "/ballroom/tango/four_step_change", category:"silver", isRestricted: true },
    { name: "Brush Tap", href: "/ballroom/tango//brush_tap", category:"silver", isRestricted: true },
    { name: "Fallaway Fourstep", href: "/ballroom/tango/fallaway_fourstep", category:"gold", isRestricted: true },
    { name: "Oversway", href: "/ballroom/tango/oversway", category:"gold" },
    { name: "Basic Reverse Turn", href: "/ballroom/tango/basic_reverse_turn", category:"gold", isRestricted: true },
    { name: "The Chase", href: "/ballroom/tango/the_chase", category:"gold", isRestricted: true },
    { name: "Fallaway Reverse and Slip Pivot", href: "/ballroom/tango/fallaway_reverse_and_slip_pivot", category:"gold", isRestricted: true },
    { name: "Five Step", href: "/ballroom/tango/five_step", category:"gold", isRestricted: true },
    { name: "Contra Check", href: "/ballroom/tango/contra_check", category:"gold", isRestricted: true },
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
    <div className="font-serif font-bold text-center md:text-8xl text-6xl mb-4 text-neutral-300">Tango</div>
    <div className= "flex flex-row w-full h-full gap-4 py-2 pb-8">
      <SearchBar query={ query } onChangeQuery={ setQuery }/>
      <Filter category={ category } onCategoryChange={ setCategory } />
    </div>
    <LinkBar links={ visibleSteps }/>
  </>
  );
}
