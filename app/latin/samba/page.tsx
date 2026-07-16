'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function SambaPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic Movements (Natural, Reverse, Side, Progressive)", href: "/latin/samba/basic_movements", category: "bronze" },
    { name: "Whisks", href: "/latin/samba/whisks", category: "bronze" },
    { name: "Samba Walks", href: "/latin/samba/samba_walks", category: "bronze" },
    { name: "Rhythm Bounce", href: "/latin/samba/rythm_bounce", category: "bronze" },
    { name: "Volta Movements", href: "/latin/samba/volta_movements", category: "bronze" },
    { name: "Travelling Bota Fogos Forward and Backward", href: "/latin/samba/travelling_bota_fogos_forward_backward", category: "bronze" },
    { name: "Criss Cross Bota Fogos (Shadow Bota Fogos)", href: "/latin/samba/criss_cross_bota_fogos", category: "bronze" },
    { name: "Bota Fogos to Promenade and Counter Promenade", href: "/latin/samba/bota_fogos_to_promenade_and_counter_promenade", category: "bronze" },
    { name: "Criss Cross Voltas", href: "/latin/samba/criss_cross_voltas", category: "bronze" },
    { name: "Solo Spot Volta", href: "/latin/samba/solo_spot_volta", category: "bronze" },
    { name: "Volta Spot Turns for Followers", href: "/latin/samba/volta_spot_turns_for_followers", category: "bronze" },
    { name: "Continuous Volta Spot turn", href: "/latin/samba/continuous_volta_spot_turn", category: "bronze" },
    { name: "Foot Changes", href: "/latin/samba/foot_changes", category: "bronze" },
    { name: "Shadow Travelling Volta", href: "/latin/samba/shadow_travelling_volta", category: "bronze" },
    { name: "Reverse Turn", href: "/latin/samba/reverse_turn", category: "bronze" },
    { name: "Corta Jaca", href: "/latin/samba/corta_jaca", category: "bronze" },
    { name: "Closed Rocks", href: "/latin/samba/closed_rocks", category: "bronze" },
    { name: "Open Rocks", href: "/latin/samba/open_rocks", category: "silver" },
    { name: "Back Rocks", href: "/latin/samba/back_rocks", category: "silver" },
    { name: "Plait", href: "/latin/samba/plait", category: "silver" },
    { name: "Rolling off the Arm", href: "/latin/samba/rolling_off_the_arm", category: "silver" },
    { name: "Argentine Crosses", href: "/latin/samba/argentine_crosses", category: "silver" },
    { name: "Maypole", href: "/latin/samba/maypole", category: "silver" },
    { name: "Shadow Circular Volta", href: "/latin/samba/shadow_circular_volta", category: "silver" },
    { name: "Contra Botafogos", href: "/latin/samba/contra_botafogos", category: "gold" },
    { name: "Roundabout", href: "/latin/samba/roundabout", category: "gold" },
    { name: "Natural Roll", href: "/latin/samba/natural_roll", category: "gold" },
    { name: "Reverse Roll", href: "/latin/samba/reverse_roll", category: "gold" },
    { name: "Promenade and Counter Promenade Runs", href: "/latin/samba/promenade_and_counter_promenade_runs", category: "gold" },
    { name: "Three Step Turn", href: "/latin/samba/three_step_turn", category: "gold" },
    { name: "Samba Locks", href: "/latin/samba/samba_locks", category: "gold" },
    { name: "Cruzados Walks and Locks", href: "/latin/samba/cruzados_walks_and_locks", category: "gold" },
    { name: "Drop Volta", href: "/latin/samba/drop_volta", category: "gold" },
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