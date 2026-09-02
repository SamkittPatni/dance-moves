'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function SambaPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic Movements (Natural, Reverse, Side, Progressive)", href: "/latin/samba/basic_movements", category: "prebronze", isRestricted: true },
    { name: "Whisks", href: "/latin/samba/whisks", category: "prebronze", isRestricted: true },
    { name: "Samba Walks", href: "/latin/samba/samba_walks", category: "prebronze", isRestricted: true },
    { name: "Rhythm Bounce", href: "/latin/samba/rythm_bounce", category: "prebronze", isRestricted: true },
    { name: "Volta Movements", href: "/latin/samba/volta_movements", category: "prebronze", isRestricted: true },
    { name: "Travelling Bota Fogos Forward and Backward", href: "/latin/samba/travelling_bota_fogos_forward_backward", category: "prebronze", isRestricted: true },
    { name: "Criss Cross Bota Fogos (Shadow Bota Fogos)", href: "/latin/samba/criss_cross_bota_fogos", category: "prebronze" },
    { name: "Bota Fogos to Promenade and Counter Promenade", href: "/latin/samba/bota_fogos_to_promenade_and_counter_promenade", category: "bronze", isRestricted: true },
    { name: "Criss Cross Voltas", href: "/latin/samba/criss_cross_voltas", category: "bronze", isRestricted: true },
    { name: "Solo Spot Volta", href: "/latin/samba/solo_spot_volta", category: "bronze", isRestricted: true },
    { name: "Volta Spot Turns for Followers", href: "/latin/samba/volta_spot_turns_for_followers", category: "bronze", isRestricted: true },
    { name: "Continuous Volta Spot turn", href: "/latin/samba/continuous_volta_spot_turn", category: "bronze", isRestricted: true },
    { name: "Foot Changes", href: "/latin/samba/foot_changes", category: "bronze", isRestricted: true },
    { name: "Shadow Travelling Volta", href: "/latin/samba/shadow_travelling_volta", category: "bronze", isRestricted: true },
    { name: "Reverse Turn", href: "/latin/samba/reverse_turn", category: "bronze", isRestricted: true },
    { name: "Corta Jaca", href: "/latin/samba/corta_jaca", category: "bronze", isRestricted: true },
    { name: "Closed Rocks", href: "/latin/samba/closed_rocks", category: "bronze", isRestricted: true },
    { name: "Open Rocks", href: "/latin/samba/open_rocks", category: "silver", isRestricted: true },
    { name: "Back Rocks", href: "/latin/samba/back_rocks", category: "silver", isRestricted: true },
    { name: "Plait", href: "/latin/samba/plait", category: "silver", isRestricted: true },
    { name: "Rolling off the Arm", href: "/latin/samba/rolling_off_the_arm", category: "silver", isRestricted: true },
    { name: "Argentine Crosses", href: "/latin/samba/argentine_crosses", category: "silver", isRestricted: true },
    { name: "Maypole", href: "/latin/samba/maypole", category: "silver", isRestricted: true },
    { name: "Shadow Circular Volta", href: "/latin/samba/shadow_circular_volta", category: "silver", isRestricted: true },
    { name: "Contra Botafogos", href: "/latin/samba/contra_botafogos", category: "gold", isRestricted: true },
    { name: "Roundabout", href: "/latin/samba/roundabout", category: "gold", isRestricted: true },
    { name: "Natural Roll", href: "/latin/samba/natural_roll", category: "gold", isRestricted: true },
    { name: "Reverse Roll", href: "/latin/samba/reverse_roll", category: "gold", isRestricted: true },
    { name: "Promenade and Counter Promenade Runs", href: "/latin/samba/promenade_and_counter_promenade_runs", category: "gold", isRestricted: true },
    { name: "Three Step Turn", href: "/latin/samba/three_step_turn", category: "gold", isRestricted: true },
    { name: "Samba Locks", href: "/latin/samba/samba_locks", category: "gold", isRestricted: true },
    { name: "Cruzados Walks and Locks", href: "/latin/samba/cruzados_walks_and_locks", category: "gold", isRestricted: true },
    { name: "Drop Volta", href: "/latin/samba/drop_volta", category: "gold", isRestricted: true },
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
    <div className= "flex flex-row w-full h-full gap-4 py-2">
      <SearchBar query={ query } onChangeQuery={ setQuery }/>
      <Filter category={ category } onCategoryChange={ setCategory } />
    </div>
    <LinkBar links={ visibleSteps }/>
  </>
  );

}