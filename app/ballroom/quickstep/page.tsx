'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function QuickstepPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Quarter turn to Right", href: "/ballroom/quickstep/quarter_turn_r", category: "bronze" },
    { name: "Progressive Chasse", href: "/ballroom/quickstep/progressive_chasse", category: "bronze" },
    { name: "Forward Lock", href: "/ballroom/quickstep/forward_lock", category: "bronze" },
    { name: "Natural Turn", href: "/ballroom/quickstep/natural_turn", category: "bronze" },
    { name: "Natural Turn with Hesitation", href: "/ballroom/quickstep/natural_turn_hesitation", category: "bronze" },
    { name: "Natural Pivot Turn", href: "/ballroom/quickstep/natural_pivot_turn", category: "bronze" },
    { name: "Natural Spin Turn", href: "/ballroom/quickstep/natural_spin_turn", category: "bronze" },
    { name: "Chasse Reverse Turn", href: "/ballroom/quickstep/chasse_reverse_turn", category: "bronze" },
    { name: "Heel Pivot", href: "/ballroom/quickstep/heel_pivot", category: "bronze" },
    { name: "Closed Impetus", href:"/ballroom/quickstep/closed_impetus", category:"bronze" },
    { name: "Backward Lock", href: "/ballroom/quickstep/backward_lock", category:"bronze" },
    { name: "Reverse Pivot", href: "/ballroom/quickstep/reverse_pivot", category: "bronze" },
    { name: "Hesitation Change", href: "/ballroom/quickstep/hesitation_change", category: "bronze" },
    { name: "Outside Change", href: "/ballroom/quickstep/outside_change", category: "bronze" },
    { name: "Reverse Corte", href: "/ballroom/quickstep/reverse_corte", category: "bronze" },
    { name: "Progressive Chasse to Right", href: "/ballroom/quickstep/progressive_chasse_r", category: "bronze" },
    { name: "Tipple Chasse", href: "/ballroom/quickstep/tipple_chasse", category: "bronze" },
    { name: "Running Finish", href: "/ballroom/quickstep/running_finish", category: "bronze" },
    { name: "Natural Turn and Back Lock", href: "/ballroom/quickstep/natural_turn_back_lock", category: "bronze" },
    { name: "Double Reverse Spin", href: "/ballroom/quickstep/double_reverse_spin", category: "bronze" },
    { name: "Running Cross Chasse", href: "/ballroom/quickstep/running_cross_chasse", category:"bronze" },
    { name: "Zig Zag, Back Lock and Running Finish", href: "/ballroom/quickstep/zig_zag_back_lock_running_finish", category:"bronze" },
    { name: "Change of Direction", href: "/ballroom/quickstep/change_of_direction", category:"bronze" },
    { name: "Quick Open Reverse", href:"/ballroom/quickstep/quick_open_reverse", category:"silver" },
    { name: "Fishtail", href: "/ballroom/quickstep/fishtail", category:"silver" },
    { name: "Running Right Turn", href: "/ballroom/quickstep/running_right_turn", category:"silver" },
    { name: "Four Quick Run", href: "/ballroom/quickstep/four_quick_run", category:"silver" },
    { name: "V6", href: "/ballroom/quickstep/v6", category:"silver" },
    { name: "Closed Telemark", href: "/ballroom/quickstep/closed_telemark", category:"silver" },
    { name: "Cross Swivel", href: "/ballroom/quickstep/cross_swivel", category:"gold" },
    { name: "Six Quick Run", href: "/ballroom/quickstep/six_quick_run", category:"gold" },
    { name: "Rumba Cross", href: "/ballroom/quickstep/rumba_cross", category:"gold" },
    { name: "Tipsy to Right and Left", href: "/ballroom/quickstep/tipsy_r_l", category:"gold" },
    { name: "Hover Corte", href: "/ballroom/quickstep/hover_corte", category:"gold" },
    { name: "Passing Natural Turn", href: "/ballroom/quickstep/passing_natural_turn", category:"gold" },
    { name: "Running Spin Turn", href: "/ballroom/quickstep/running_spin_turn", category:"gold" },

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
