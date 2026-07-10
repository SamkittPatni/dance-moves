'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../searchbar"
import Filter from "../filter"
import { useState } from 'react'

export default function WaltzPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Closed Changes", href: "/ballroom/waltz/closed_changes", category: "bronze" },
    { name: "Natural Turn", href: "/ballroom/waltz/natural_turn", category: "bronze" },
    { name: "Reverse Turn", href: "/ballroom/waltz/reverse_turn", category: "bronze" },
    { name: "Natural Spin Turn", href: "/ballroom/waltz/natural_spin_turn", category: "bronze" },
    { name: "Whisk", href: "/ballroom/waltz/whisk", category: "bronze" },
    { name: "Chasse from Promenade Position", href: "/ballroom/waltz/chasse_pp", category: "bronze" },
    { name: "Closed Impetus", href:"/ballroom/waltz/closed_impetus", category:"bronze" },
    { name: "Hesitation Change", href: "/ballroom/waltz/hesitation_change", category: "bronze" },
    { name: "Outside Change", href: "/ballroom/waltz/outside_change", category: "bronze" },
    { name: "Reverse Corte", href: "/ballroom/waltz/reverse_corte", category: "bronze" },
    { name: "Back Whisk", href: "/ballroom/waltz/back_whisk", category: "bronze" },
    { name: "Basic Weave", href: "/ballroom/waltz/basic_wave", category: "bronze" },
    { name: "Double Reverse Spin", href: "/ballroom/waltz/double_reverse_spin", category: "bronze" },
    { name: "Reverse Pivot", href: "/ballroom/waltz/reverse_pivot", category: "bronze" },
    { name: "Back Lock", href: "/ballroom/waltz/back_lock", category:"bronze" },
    { name: "Forward Lock", href: "/ballroom/waltz/forward_lock", category:"bronze" },
    { name: "Progressive Chasse to Right", href: "/ballroom/waltz/progressive_chasse_R", category:"bronze" },
    { name: "Weave from Promenade Position", href:"/ballroom/waltz/weave_pp", category:"silver" },
    { name: "Closed Telemark", href: "/ballroom/waltz/closed_telemark", category:"silver" },
    { name: "Open Telemark and Cross Hesitation", href: "/ballroom/waltz/open_telemark_cross_hesitation", category:"silver" },
    { name: "Open Telemark and Wing", href: "/ballroom/waltz/open_telemark_wing", category:"silver" },
    { name: "Open Impetus and Cross Hesitation", href: "/ballroom/waltz/open_impetus_cross_hesitation", category:"silver" },
    { name: "Open Impetus and Wing", href: "/ballroom/waltz/open_impetus_wing", category:"silver" },
    { name: "Open Impetus Turn", href: "/ballroom/waltz/open_impetus_turn", category:"restricted" },
    { name: "Outside Spin", href: "/ballroom/waltz/outside_spin", category:"silver" },
    { name: "Turning Lock", href: "/ballroom/waltz/turning_lock", category:"silver" },
    { name: "Drag Hesitation", href: "/ballroom/waltz/drag_hesitation", category:"silver" },
    { name: "Left Whisk", href: "/ballroom/waltz/left_whisk", category:"gold" },
    { name: "Contra Check", href: "/ballroom/waltz/contra_check", category:"gold" },
    { name: "Closed Wing", href: "/ballroom/waltz/closed_wing", category:"gold" },
    { name: "Turning Lock to Right", href: "/ballroom/waltz/turning_lock_R", category:"gold" },
    { name: "Fallaway Reverse and Slip Pivot", href: "/ballroom/waltz/fallaway_reverse_slip_pivot", category:"gold" },
    { name: "Hover Corte", href: "/ballroom/waltz/hover_corte", category:"gold" },
    { name: "Fallaway Whisk", href: "/ballroom/waltz/fallaway_whisk", category:"gold" },
    { name: "Fallaway Natural Turn", href: "/ballroom/waltz/fallaway_natural_turn", category:"restricted" },
    { name: "Running Spin Turn", href: "/ballroom/waltz/running_spin_turn", category:"restricted" },
    { name: "Outside Swivel", href: "/ballroom/waltz/outside_swivel", category:"open" },
    { name: "Oversway", href: "/ballroom/waltz/oversway", category:"open" },
    { name: "Same Foot Lunge", href: "/ballroom/waltz/same_foot_lunge", category:"open" },
    { name: "Throwaway Oversway", href: "/ballroom/waltz/throwaway_oversway", category:"open" },

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