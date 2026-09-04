'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function QuickstepPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Quarter turn to Right", href: "/ballroom/quickstep/quarter_turn_r", category: "prebronze", isRestricted: true },
    { name: "Progressive Chasse", href: "/ballroom/quickstep/progressive_chasse", category: "prebronze", isRestricted: true },
    { name: "Forward Lock", href: "/ballroom/quickstep/forward_lock", category: "prebronze", isRestricted: true },
    { name: "Natural Turn", href: "/ballroom/quickstep/natural_turn", category: "prebronze", isRestricted: true },
    { name: "Natural Turn with Hesitation", href: "/ballroom/quickstep/natural_turn_hesitation", category: "prebronze", isRestricted: true },
    { name: "Natural Pivot Turn", href: "/ballroom/quickstep/natural_pivot_turn", category: "prebronze", isRestricted: true },
    { name: "Natural Spin Turn", href: "/ballroom/quickstep/natural_spin_turn", category: "prebronze", isRestricted: true },
    { name: "Chasse Reverse Turn", href: "/ballroom/quickstep/chasse_reverse_turn", category: "prebronze" },
    { name: "Heel Pivot", href: "/ballroom/quickstep/heel_pivot", category: "prebronze" },
    { name: "Closed Impetus", href:"/ballroom/quickstep/closed_impetus", category:"bronze", isRestricted: true },
    { name: "Backward Lock", href: "/ballroom/quickstep/backward_lock", category:"bronze", isRestricted: true },
    { name: "Reverse Pivot", href: "/ballroom/quickstep/reverse_pivot", category: "bronze", isRestricted: true },
    { name: "Hesitation Change", href: "/ballroom/quickstep/hesitation_change", category: "bronze", isRestricted: true },
    { name: "Outside Change", href: "/ballroom/quickstep/outside_change", category: "bronze", isRestricted: true },
    { name: "Reverse Corte", href: "/ballroom/quickstep/reverse_corte", category: "bronze", isRestricted: true },
    { name: "Progressive Chasse to Right", href: "/ballroom/quickstep/progressive_chasse_r", category: "bronze", isRestricted: true },
    { name: "Tipple Chasse", href: "/ballroom/quickstep/tipple_chasse", category: "bronze", isRestricted: true },
    { name: "Running Finish", href: "/ballroom/quickstep/running_finish", category: "bronze", isRestricted: true },
    { name: "Natural Turn and Back Lock", href: "/ballroom/quickstep/natural_turn_back_lock", category: "bronze", isRestricted: true },
    { name: "Double Reverse Spin", href: "/ballroom/quickstep/double_reverse_spin", category: "bronze", isRestricted: true },
    { name: "Running Cross Chasse", href: "/ballroom/quickstep/running_cross_chasse", category:"bronze", isRestricted: true },
    { name: "Zig Zag, Back Lock and Running Finish", href: "/ballroom/quickstep/zig_zag_back_lock_running_finish", category:"bronze", isRestricted: true },
    { name: "Change of Direction", href: "/ballroom/quickstep/change_of_direction", category:"bronze", isRestricted: true },
    { name: "Quick Open Reverse", href:"/ballroom/quickstep/quick_open_reverse", category:"silver", isRestricted: true },
    { name: "Fishtail", href: "/ballroom/quickstep/fishtail", category:"silver", isRestricted: true },
    { name: "Running Right Turn", href: "/ballroom/quickstep/running_right_turn", category:"silver", isRestricted: true },
    { name: "Four Quick Run", href: "/ballroom/quickstep/four_quick_run", category:"silver", isRestricted: true },
    { name: "V6", href: "/ballroom/quickstep/v6", category:"silver", isRestricted: true },
    { name: "Closed Telemark", href: "/ballroom/quickstep/closed_telemark", category:"silver", isRestricted: true },
    { name: "Cross Swivel", href: "/ballroom/quickstep/cross_swivel", category:"gold", isRestricted: true },
    { name: "Six Quick Run", href: "/ballroom/quickstep/six_quick_run", category:"gold", isRestricted: true },
    { name: "Rumba Cross", href: "/ballroom/quickstep/rumba_cross", category:"gold", isRestricted: true },
    { name: "Tipsy to Right and Left", href: "/ballroom/quickstep/tipsy_r_l", category:"gold", isRestricted: true },
    { name: "Hover Corte", href: "/ballroom/quickstep/hover_corte", category:"gold", isRestricted: true },
    { name: "Passing Natural Turn", href: "/ballroom/quickstep/passing_natural_turn", category:"gold", isRestricted: true },
    { name: "Running Spin Turn", href: "/ballroom/quickstep/running_spin_turn", category:"gold" },

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
    <div className="font-serif font-bold text-center md:text-8xl text-6xl mb-4 text-neutral-300">Quickstep</div>
    <div className= "flex flex-row w-full h-full gap-4 py-2 pb-8">
      <SearchBar query={ query } onChangeQuery={ setQuery }/>
      <Filter category={ category } onCategoryChange={ setCategory } />
    </div>
    <LinkBar links={ visibleSteps }/>
  </>
  );

}
