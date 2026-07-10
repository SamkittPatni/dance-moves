'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../searchbar"
import Filter from "../filter"
import { useState } from 'react'

export default function TangoPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Back Corte", href:"/ballroom/tango/back_corte", category:"gold" },
    { name: "Back Open Promenade", href:"/back_open_promenade", category:"silver" },
    { name: "Basic Reverse Turn", href: "/basic_reverse_turn", category:"bronze" },
    { name: "Brush Tap", href: "/brush_tap", category:"gold" },
    { name: "Clased Promenade", href: "/closed_promenade" },
    { name: "Contra Check", href: "/contra_check" },
    { name: "Fallaway Fourstep", href: "/fallaway_fourstep" },
    { name: "Fallaway Promenade", href: "/fallaway_promenade" },
    { name: "Fallaway Reverse and Slip Pivot", href: "/fallaway_reverse_and_slip_pivot" },
    { name: "Five Step", href: "/five_step" },
    { name: "Four Step", href: "/ballroom/tango/four_step" },
    { name: "Four Step Change", href: "/ballroom/tango/four_step_change" },
    { name: "LF RF Rocks", href: "/ballroom/tango/lf_rf_rocks" },
    { name: "Natural Promenade Turn", href: "/ballroom/tango/natural_promenade_turn" },
    { name: "Natural Twist Turn", href: "/ballroom/tango/natural_twist_turn" },
    { name: "Open and Closed Finish", href: "/ballroom/tango/open_and_closed_finish" },
    { name: "Open Promenade", href: "/ballroom/tango/open_promenade" },
    { name: "Open Reverse Turn Inside", href: "/ballroom/tango/open_reverse_turn_inside" },
    { name: "Open Reverse Turn Outside", href: "/ballroom/tango/open_reverse_turn_outise" },
    { name: "Outside Swivel", href: "/ballroom/tango/outside_swivel" },
    { name: "Oversway", href: "/ballroom/tango/oversway" },
    { name: "Progressive Link", href: "/ballroom/tango/progressive_link" },
    { name: "Progressive Side Step", href: "/ballroom/tango/progressive_side_step" },
    { name: "Progressive Side Step Reverse Turn", href: "/ballroom/tango/progressive_sice_step_reverse_turn" },
    { name: "Promenade Link", href: "/ballroom/tango/progressive_side_step_reverse_turn" },
    { name: "Reverse Outside Swivel", href: "/ballroom/tango/reverse_outside_swivel" },
    { name: "Rock Turn", href: "/ballroom/tango/rock_turn" },
    { name: "The Chase", href: "ballroom/tango/the_chase" },
    { name: "Walk", href: "/ballroom/tango/walk" },
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
