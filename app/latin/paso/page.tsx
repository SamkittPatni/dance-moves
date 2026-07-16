'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function PasoPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Sur Place", href: "/latin/paso/sur_place", category: "bronze" },
    { name: "Basic Movement", href: "/latin/paso/basic_movement", category: "bronze" },
    { name: "Chasses to Right or Left", href: "/latin/paso/chasses_r_l", category: "bronze" },
    { name: "Drag", href: "/latin/paso/drag", category: "bronze" },
    { name: "Deplacement (Attack)", href: "/latin/paso/deplacement", category: "bronze" },
    { name: "Promenade Link (also Promenade Close)", href: "/latin/paso/promenade_link", category: "bronze" },
    { name: "Promenade", href: "/latin/paso/promenade", category: "bronze" },
    { name: "Ecart", href: "/latin/paso/ecart", category: "bronze" },
    { name: "Fallaway Whisk", href: "/latin/paso/fallaway_whisk", category: "bronze" },
    { name: "Appel", href: "/latin/paso/appel", category: "restricted" },
    { name: "Separation", href: "/latin/paso/separation", category: "bronze" },
    { name: "Fallaway Ending to Separation", href: "/latin/paso/fallaway_ending_to_separation", category: "bronze" },
    { name: "Huit", href: "/latin/paso/huit", category: "bronze" },
    { name: "Sixteen", href: "/latin/paso/sixteen", category: "bronze" },
    { name: "Promenade and Counter Promenade", href: "/latin/paso/promenade_and_counter_promenade", category: "bronze" },
    { name: "Grand Circle", href: "/latin/paso/grand_circle", category: "bronze" },
    { name: "Open Telemark", href: "/latin/paso/open_telemark", category: "bronze" },
    { name: "La Passe", href: "/latin/paso/la_passe", category: "silver" },
    { name: "Banderillas", href: "/latin/paso/banderillas", category: "silver" },
    { name: "Twist Turn", href: "/latin/paso/twist_turn", category: "silver" },
    { name: "Fallaway Reverse Turn", href: "/latin/paso/fallaway_reverse_turn", category: "silver" },
    { name: "Coup de Pique", href: "/latin/paso/coup_de_pique", category: "silver" },
    { name: "Left Foot Variation", href: "/latin/paso/lf_variation", category: "silver" },
    { name: "Spanish Lines", href: "/latin/paso/spanish_lines", category: "silver" },
    { name: "Flamenco Taps", href: "/latin/paso/flamenco_taps", category: "silver" },
    { name: "Syncopated Separation", href: "/latin/paso/syncopated_separation", category: "gold" },
    { name: "Travelling Spins from Promenade Position", href: "/latin/paso/travelling_spins_from_pp", category: "gold" },
    { name: "Travelling Spins from Counter Promenade Position", href: "/latin/paso/travelling_spins_from_cpp", category: "gold" },
    { name: "Fregolina (also Farol)", href: "/latin/paso/fregolina", category: "gold" },
    { name: "Twists", href: "/latin/paso/twists", category: "gold" },
    { name: "Chasse Cape (including Outside Turn)", href: "/latin/paso/chasse_cape", category: "gold" },
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